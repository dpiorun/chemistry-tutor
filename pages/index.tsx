import Layout from "../components/layout/Layout";
import TypingAnimation from "@/components/TypingAnimation";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <div className="relative flex h-full w-full items-center">
        <div>
          <h3 className="name mb-6 text-6xl font-bold uppercase leading-tight">
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
