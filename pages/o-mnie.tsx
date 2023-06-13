import SectionAbout from "@/components/SectionAbout";
import ListTriangle from "@/components/ListTriangle";
import ListYears from "@/components/ListYears";
import SectionTitle from "@/components/SectionTitle";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { JSDOM } from "jsdom";

enum SectionTitles {
  About = "O mnie",
  Services = "Zajmuję się",
  Interests = "Zainteresowania",
  Education = "Edukacja",
  Experience = "Doświadczenie",
  Testimonials = "Opinie Uczniów",
}

const AboutMeParagraph = () => (
  <>
    <p className="mb-[15px]">
      Lubię pracę z młodzieżą, a efektywne przekazywanie wiedzy sprawia mi
      ogromną przyjemność! Obecnie pracuję jako nauczyciel chemii w liceum.
    </p>
    <p>
      Z moim 15 letnim doświadczeniem w nauczaniu chemii oraz wykształceniem
      pedagogicznym przygotowuję do matury i zarażam pasją do chemii.
    </p>
  </>
);

const aboutData = [
  ["Nazwisko", "Kornelia Piorun"],
  ["Adres", "Łowicz, Polska"],
  ["Studia", "Politechnika Warszawska"],
  ["Wykształcenie", "mgr inż. technologii chemicznej"],
];

const servicesData = [
  "Korepetycje z chemii",
  "Nauczanie w szkole średniej",
  "Przygotowanie do matury",
];

const interestsData = [
  "Muzyka i Kino",
  "Podróżowanie i Piknikowanie",
  "Deszcz i Śnieg",
];

const educationData = [
  {
    school: "Politechnika Warszawska",
    degree: "Magister Inżynier",
    years: "2008 - 2014",
  },
];

const experienceData = [
  {
    institution: "II LO Ogólnokształcące w Łowiczu",
    position: "Nauczycielka",
    years: "2020 - obecnie",
  },
  {
    institution: "Szkoła Podstawowa w Mastkach",
    position: "Nauczycielka",
    years: "2018 - 2020",
  },
];

type Testimonial = {
  avatar?: string | null;
  author?: string | null;
  rate?: string | null;
  date?: string | null;
  content?: string | null;
};

export const getStaticProps: GetStaticProps<{
  testimonials: Testimonial[];
}> = async () => {
  const response = await fetch("https://www.e-korepetycje.net/korciao/chemia");
  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const testimonials: Testimonial[] = [];

  const opinions = document.querySelectorAll(".opinion-single");

  opinions.forEach((opinion) => {
    const rate = opinion.querySelector(".rate")?.textContent;
    if (rate?.trim() == "5/5")
      testimonials.push({
        avatar: opinion.querySelector('img[alt="avatar"]')?.getAttribute("src"),
        author: opinion.querySelector(".opinion-author")?.textContent,
        rate,
        date: opinion.querySelector(".opinion-date")?.textContent,
        content: opinion.querySelector(".opinion-content-wrapper")?.textContent,
      });
  });

  return { props: { testimonials } };
};

const About = ({
  testimonials,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout img="assets/img/about/about_1.jpg">
      <SectionAbout cols={1}>
        <SectionTitle>{SectionTitles.About}</SectionTitle>
        <div className="grid gap-12 small:grid-cols-2 small:grid-cols-2 middle:grid-cols-none">
          <div className="relative aspect-square w-full middle:hidden">
            <Image
              src="/assets/img/about/about_1.jpg"
              alt=" "
              fill
              className="position-top object-cover"
            />
          </div>
          <div className="grid gap-12 laptop:grid-cols-2">
            <div>
              <AboutMeParagraph />
            </div>
            <ul>
              {aboutData.map((entry) => (
                <li
                  key={entry[0]}
                  className="mb-3 grid grid-cols-[minmax(140px,auto)_minmax(0,1fr)]"
                >
                  <span className="font-bold">{entry[0]}</span>
                  <span>{entry[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionAbout>
      <SectionAbout cols={2}>
        <div>
          <SectionTitle>{SectionTitles.Services}</SectionTitle>
          <ul role="list">
            {servicesData.map((service) => (
              <ListTriangle key={service}>{service}</ListTriangle>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>{SectionTitles.Interests}</SectionTitle>
          <div>
            <ul>
              {interestsData.map((interest) => (
                <ListTriangle key={interest}>{interest}</ListTriangle>
              ))}
            </ul>
          </div>
        </div>
      </SectionAbout>

      <SectionAbout cols={2}>
        <div>
          <SectionTitle>{SectionTitles.Education}</SectionTitle>
          <ul>
            {educationData.map((education, index) => (
              <ListYears
                key={index}
                years={education.years}
                institution={education.school}
                info={education.degree}
              />
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>{SectionTitles.Experience}</SectionTitle>
          <ul>
            {experienceData.map((experience, index) => (
              <ListYears
                key={index}
                years={experience.years}
                institution={experience.institution}
                info={experience.position}
              />
            ))}
          </ul>
        </div>
      </SectionAbout>

      {testimonials.length > 0 && (
        <SectionAbout cols={1}>
          <SectionTitle>{SectionTitles.Testimonials}</SectionTitle>
          <div className="mt-20 grid gap-x-12 gap-y-16 small:grid-cols-2 middle:grid-cols-none laptop:small:grid-cols-2 large:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="grow border-2 border-solid border-slate-200 p-10">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {Array.from(Array(5).keys()).map((index) => (
                        <Image
                          alt="star"
                          src="/assets/img/svg/star.svg"
                          width={18}
                          height={18}
                          className="img-amber-600"
                          key={index}
                        />
                      ))}
                      <p className="ms-2 text-sm">{testimonial.rate}</p>
                    </div>
                    <p className="text-xs">{testimonial.date}</p>
                  </div>
                  <p className="mt-4">{testimonial.content}</p>
                </div>
                <div className="ms-4 mt-6 flex items-center">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      width={60}
                      height={60}
                      alt="avatar"
                    />
                  )}

                  <h3 className="text-l float-right px-10 font-semibold">
                    {testimonial.author}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </SectionAbout>
      )}
    </Layout>
  );
};
export default About;
