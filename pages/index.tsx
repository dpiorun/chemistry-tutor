import Layout from "../components/layout/Layout";
import TypingAnimation from "@/components/TypingAnimation";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <Layout img="assets/img/about/about_4.jpg">
      <div className="relative flex h-full w-full items-center">
        <div className="flex w-full flex-col items-center middle:items-start">
          <div className="relative mb-6 aspect-square w-full middle:hidden">
            <Image
              src="/assets/img/about/about_4.jpg"
              fill
              alt=" "
              className="object-cover object-top"
            />
          </div>
          <h3 className="name mb-6 text-center text-6xl font-bold uppercase leading-tight middle:text-start">
            Kornelia Piorun
          </h3>
          <span className="mb-6 inline-block h-[5px] w-[70px] bg-slate-950" />
          <TypingAnimation />
          <div>
            <Link
              href="kontakt"
              className="border-2 border-slate-950 bg-slate-950 px-8 py-3.5 text-white duration-300 hover:bg-transparent hover:text-inherit hover:duration-300"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
