import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListTriangle = ({ children }: Props) => (
  <li className="relative float-left mb-[8px] w-full pl-[25px]  before:absolute before:left-0 before:top-[7px] before:inline-block before:border-y-[5.5px] before:border-l-[9.5px] before:border-r-0 before:border-slate-950 before:border-transparent before:border-l-slate-950 before:content-['']">
    {children}
  </li>
);

export default ListTriangle;
