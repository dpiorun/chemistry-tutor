import Link from "next/link";
import { Fragment, useState } from "react";
import Copyright from "../Copyright";
import Image from "next/image";
import BurgerButton from "../BurgerButton";
import { useRouter } from "next/router";

const navs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "O mnie", href: "/o-mnie" },
  { id: 3, name: "Materiały", href: "/materialy" },
  { id: 4, name: "Korepetycje", href: "/korepetycje" },
  { id: 5, name: "Kontakt", href: "/kontakt" },
];

export const socialLinks = [
  {
    href: "https://www.e-korepetycje.net/korciao",
    img: "assets/img/svg/social/e-korepetycje.svg",
  },
];

const logo = "Chemia";

const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { asPath } = useRouter();

  return (
    <Fragment>
      <div className="fixed left-0 right-0 top-0 z-10 block h-[50px] bg-white middle:hidden">
        <div className="clear-both flex h-full w-full items-center justify-between px-[20px] py-0">
          <div>
            <Link
              className="text-[22px] font-extrabold uppercase leading-[50px] tracking-[2px] text-black"
              href="/"
            >
              <span>{logo}</span>
            </Link>
          </div>
          <div className="relative">
            <BurgerButton
              onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
              open={openBurgerMenu}
            />
          </div>
        </div>
      </div>

      <div
        className={[
          "fixed",
          openBurgerMenu ? "right-0" : "right-[-200px]",
          "top-[50px]",
          "z-[15]",
          "h-[100vh]",
          "w-[200px]",
          "bg-white",
          "transition-all",
          "duration-300",
          "middle:hidden",
        ].join(" ")}
      >
        <div className="px-6 pb-6 pt-20 text-right">
          <div>
            <Image
              className="float-right h-[100px] w-[100px] object-cover"
              alt="image"
              src={"/assets/img/about/about_3.jpg"}
              width={100}
              height={100}
            />
            <div className="float-right mt-20 h-auto w-full">
              <ul>
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className={"mb-4"}
                    data-ui={asPath == nav.href ? "active" : undefined}
                  >
                    <Link href={`${nav.href}`}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="float-right mt-20">
              <ul>
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      className="fill-slate-700 text-slate-700"
                      href={social.href}
                      target="_blank"
                    >
                      <Image
                        src={social.img}
                        alt="image"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Copyright className="float-right clear-both mt-4" />
          </div>
        </div>
      </div>
      <div className="fixed left-0 right-0 top-0 z-[10] flex hidden h-[70px] items-center justify-between bg-white px-[70px] py-0 leading-[70px] middle:flex">
        <Link
          className="text-[25px] font-extrabold uppercase leading-[70px] tracking-[2px] text-black no-underline"
          href="/"
        >
          <span className="relative top-[2px]">{logo}</span>
        </Link>
        <ul>
          {navs.map((nav) => (
            <li
              key={nav.id}
              data-ui={asPath == nav.href ? "active" : undefined}
              className="relative float-left leading-9 text-black hover:text-white data-active:bg-black data-active:text-white"
            >
              <Link
                className="inline-block px-8 py-0 font-medium transition-all duration-300 after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
                href={`${nav.href}`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="absolute bottom-[15px] top-[15px] z-[-1] block bg-black transition-all duration-500" />
      </div>
    </Fragment>
  );
};
export default Header;
