import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import AppHead from "../components/AppHead";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Preloader />
      <AnimatePresence mode="wait" initial={false}>
        <div className={poppins.className}>
          <Component {...pageProps} />
          <Analytics />
        </div>
      </AnimatePresence>
    </>
  );
}
