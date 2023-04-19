import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppHead from "../components/AppHead";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Preloader />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
