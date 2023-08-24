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
    <nav className="absolute top-5 z-10 flex w-11/12 items-center justify-self-center rounded-[33px] bg-white px-[3%] py-2 font-bold text-black">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex flex-grow justify-center">
        <ul className="flex space-x-8">{navItems}</ul>
      </div>
    </nav>
  );
}
