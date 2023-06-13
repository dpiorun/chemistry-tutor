import SectionTitle from "@/components/SectionTitle";
import Layout from "@/components/layout/Layout";
import { InlineWidget } from "react-calendly";

const Lessons = () => (
  <Layout img="assets/img/about/about_4.jpg">
    <section>
      <SectionTitle>Korepetycje</SectionTitle>
      <InlineWidget
        url="https://calendly.com/kornelia-piorun/60min"
        styles={{
          height: "75vh",
        }}
        pageSettings={{
          primaryColor: "d946ef",
        }}
      />
    </section>
  </Layout>
);

export default Lessons;
