import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logo from "@/public/images/logo.png";

export default function Navbar() {
  const t = useTranslations("Nav");

  const links = [
    { title: t("chessboard"), route: "/chessboard" },
    { title: t("about"), route: "/about" },
    { title: t("contact"), route: "/contact" },
  ];

  const navItems = links.map(({ title, route }) => (
    <li key={route}>
      <Link className="" href={route}>
        {title}
      </Link>
    </li>
  ));

  return (
    <nav className="absolute border-[1px] border-black top-5 z-10 flex w-11/12 items-center justify-self-center rounded-[33px] bg-white px-[3%] py-2 text-lg font-bold text-black">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="ml-8 mr-24 flex flex-grow justify-end">
        <ul className="flex space-x-16">{navItems}</ul>
      </div>
    </nav>
  );
}
