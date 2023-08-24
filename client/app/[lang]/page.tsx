import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import bgImage from "@/public/images/header-bg.jpg";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <header className="relative flex min-h-screen items-center justify-center">
        <div className="absolute h-full w-full py-4 brightness-[0.2]">
          <Image
            src={bgImage}
            alt="Person playing chess"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="z-10 py-4 text-center text-white">
          <h1 className="p-5 font-title text-6xl tracking-wider">
            {t("headerTitle")}
          </h1>
          <h2 className="p-3 font-title text-3xl tracking-wider">
            {t("subTitle")}
          </h2>
          <h3 className="text-lg tracking-wide">{t("description")}</h3>
          <div className="mt-10">
            <Link
              href="/chessboard"
              className="rounded-lg bg-white px-8 py-4 text-center text-xl font-bold tracking-widest text-black hover:bg-teal-600 hover:text-white"
            >
              {t("getStartedButton")}
            </Link>
          </div>
        </div>
      </header>
      <main className="relative grid h-2/3 justify-center bg-white text-center text-black">
        <h2 className="mt-10 text-4xl font-bold">{t("mainTitle")}</h2>
        <div className="grid grid-cols-2">
          <div className="">
            <h3>{t("mainSubTitle")}</h3>
            <p>{t("mainSubDescription1")}</p>
            <p>{t("mainSubDescription2")}</p>
          </div>
          <div className="">
            <p>images here</p>
          </div>
        </div>
      </main>
    </>
  );
}
