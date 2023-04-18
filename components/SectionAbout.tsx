import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  cols: 1 | 2;
}

const SectionAbout = ({ children, cols }: Props) => {
  if (cols == 1)
    return (
      <section className="float-left clear-both h-auto w-full">
        {children}
      </section>
    );

  return (
    <section className="float-left clear-both grid h-auto w-full gap-x-12 gap-y-16 small:grid-cols-2 middle:grid-cols-none laptop:small:grid-cols-2">
      {children}
    </section>
  );
};

export default SectionAbout;
