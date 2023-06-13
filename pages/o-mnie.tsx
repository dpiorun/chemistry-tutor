import SectionAbout from "@/components/SectionAbout";
import ListTriangle from "@/components/ListTriangle";
import ListYears from "@/components/ListYears";
import SectionTitle from "@/components/SectionTitle";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

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
      Z moim 15 letnim doświadczeniem w nauczaniu chemii oraz przygotowaniem
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

const testimonials = [
  {
    desc: "Bardzo polecam, miła atmosfera na zajęciach. Pani Kornelia podchodziła indywidualnie do omawianych zagadnień i poświęcała na nie taką ilość czasu, jaka była dla mnie konieczna. Zadania i zagadnienia były dokładnie analizowane, a ponadto dostawałam niezliczoną ilość kserówek z zadaniami i arkuszami, które są przerabiane na zajęciach i jako praca domowa. Pani Kornelia była dla mnie ogromną motywacją w nauce do matury i wiem, że bez niej nie osiągnęłabym mojego wyniku. :)))",
    img: "img/testimonials/1.jpg",
    user: "Maja",
  },
  {
    desc: "Bardzo polecam zajęcia u Pani Korneli. Miła atmosfera na zajęciach i indywidualne podejście do ucznia pomogło w zrozumienie i opanowaniu materiału do matury z chemii. Pani Kornelia była bardzo pomocna i motywowała do nauki. Dodatkowo nie było żadnych problemów z komunikacją.      ",
    img: "img/testimonials/2.jpg",
    user: "Weronika",
  },
  {
    desc: "Z całego serca polecam! Dzięki Pani Kornelii udało mi się naprawdę polubić chemię. Ciekawie prowadzone zajęcia to ogromny plus! Bardzo lubiłam uczęszczać na korepetycje i nigdy się nie nudziłam, atmosfera na lekcjach bardzo sprzyjała nauce :) Bardzo ważne jest też to, że dostawałam masę kserówek do domu i też do robienia na zajęciach (z tego co słyszałam moi znajomi u innych korepetytorów musieli sami wszystko przepisywać). Zdałam ten przedmiot na maturze z satysfakcjonującym mnie wynikiem i to wszystko dzięki Pani Kornelii Piorun!! :)      ",
    img: "img/testimonials/3.jpg",
    user: "Magda",
  },
];

const About = () => {
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

      <SectionAbout cols={1}>
        <SectionTitle>{SectionTitles.Testimonials}</SectionTitle>
        <div className="mt-20 grid gap-x-12 gap-y-16 small:grid-cols-2 middle:grid-cols-none laptop:small:grid-cols-2 large:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="border-2 border-solid border-slate-200 p-10">
                <p>{testimonial.desc}</p>
              </div>
              <h3 className="text-l float-right px-10 font-semibold">
                {testimonial.user}
              </h3>
            </div>
          ))}
        </div>
      </SectionAbout>
    </Layout>
  );
};
export default About;
