import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Nauczycielka", "Korepetycje", "Przygotowanie do matury"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h3 className="mb-9 h-[36px] text-2xl font-light">
      <span>
        <b ref={el}></b>
      </span>
    </h3>
  );
};

export default TypingAnimation;
