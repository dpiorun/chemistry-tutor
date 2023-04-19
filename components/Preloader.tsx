import { Fragment, useEffect, useState } from "react";

const Preloader = () => {
  const [prepare, setPrepare] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setPrepare(true), 700);
    setTimeout(() => setOpen(true), 1200);
    setTimeout(() => setVisible(false), 2000);
  }, []);

  return visible ? (
    <Fragment>
      <div
        className={[
          "fixed",
          "left-0",
          "top-0",
          "z-50",
          "flex",
          "h-screen",
          "w-full",
          "before:absolute",
          "before:left-0",
          "before:top-0",
          "before:h-full",
          "before:bg-black",
          "before:transition-all",
          "before:duration-300",
          "after:absolute",
          "after:right-0",
          "after:top-0",
          "after:h-full",
          "after:bg-black",
          "after:transition-all",
          "after:duration-300",
          open ? "before:w-0 after:w-0" : "before:w-1/2 after:w-1/2",
        ].join(" ")}
      >
        <div
          className={[
            "relative",
            "m-auto",
            "w-px",
            "overflow-hidden",
            "transition-all",
            "duration-700",
            "before:absolute",
            "before:left-0",
            "before:top-1/2",
            "before:h-0",
            "before:w-px",
            "before:translate-y-[-50%]",
            "before:animate-lineheight",
            "before:bg-white",
            "after:absolute",
            "after:relative",
            "after:left-0",
            "after:top-0",
            "after:h-full",
            "after:w-px",
            "after:translate-y-[-100%]",
            "after:animate-lineround",
            "after:bg-gray-700",
            prepare ? "h-full opacity-0 after:opacity-0" : "h-[250px]",
          ].join(" ")}
        />
      </div>
    </Fragment>
  ) : null;
};
export default Preloader;
