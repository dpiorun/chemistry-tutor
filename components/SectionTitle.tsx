import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props) => (
  <div className="mb-12 overflow-hidden">
    <h1 className="relative inline-block font-bold uppercase tracking-[8px] after:absolute after:left-full after:top-1/2 after:ml-6 after:h-px after:w-screen after:bg-slate-500">
      {children}
    </h1>
  </div>
);

export default SectionTitle;
