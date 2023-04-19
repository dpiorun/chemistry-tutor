import { Fragment, ReactNode } from "react";
import { motion } from "framer-motion";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <div className="relative float-left clear-both min-h-[100vh] w-full">
        <div className="fixed inset-y-0 left-0 z-[10] hidden w-[70px] bg-white middle:block" />
        <div className="fixed inset-y-0 right-0 z-[10] hidden w-[70px] bg-white middle:block" />

        <Header />
        <div className="absolute inset-0 overflow-hidden text-slate-950 middle:inset-[70px]">
          <div className="absolute bottom-0 left-0 top-0 hidden w-[35%] middle:block">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(assets/img/about/1.jpg)",
              }}
            />
          </div>

          <motion.main
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeIn",
              duration: 2,
              type: "spring",
              bounce: 0,
            }}
            className="absolute bottom-0 right-0 top-[50px] grid w-full gap-20 overflow-y-scroll bg-violet-50 px-5 py-16 middle:top-0 middle:w-[65%] middle:px-12 middle:py-20"
          >
            {children}
          </motion.main>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Layout;
