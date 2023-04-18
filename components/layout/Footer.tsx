import Image from "next/image";
import { socialLinks } from "./Header";
import Copyright from "../Copyright";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[10] flex hidden h-[70px] items-center justify-between bg-white px-[70px] py-0 leading-[70px] middle:flex">
      <Copyright />
      <ul>
        {socialLinks.map((social, index) => (
          <li key={index} className="mr-3.5 inline-block">
            <a href={social.href} target="_blank">
              <Image src={social.img} alt="image" width={30} height={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
