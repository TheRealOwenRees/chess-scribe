import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import "@/css/example-pdfs.css";

import bgImage from "@/public/images/header-bg.jpg";
import pdf1 from "@/public/images/examplepdf1.webp";
import pdf2 from "@/public/images/examplepdf2.webp";

export default function Home() {
  const t = useTranslations("Home");

  const button =
    "rounded-3xl bg-white px-8 py-4 text-center text-xl font-bold tracking-widest text-black hover:bg-teal-600 hover:text-white";

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
            <Link href={"/chessboard"} className={button}>
              {t("getStartedButton")}
            </Link>
          </div>
        </div>
      </header>
      <main className="relative grid h-min bg-white p-3 text-center text-black">
        <h2 className="mb-16 mt-10 text-4xl font-bold">{t("mainTitle")}</h2>
        <div className="grid items-center justify-items-center md:grid-cols-2">
          <div className="w-4/5">
            <h3 className="mb-8 font-title text-2xl">{t("mainSubTitle")}</h3>
            <p className="mb-6">{t("mainSubDescription1")}</p>
            <p>{t("mainSubDescription2")}</p>
            <div className="mb-24 mt-10">
              <Link
                href={"/chessboard"}
                className={`${button} border-2 border-black hover:border-teal-600`}
              >
                {t("getStartedButton")}
              </Link>
            </div>
          </div>
          <div className="example-pdfs mb-12 md:my-12">
            <Image src={pdf2} alt="chess pdf" />
            <Image src={pdf1} alt="chess pdf" />
          </div>
        </div>
      </main>
    </>
  );
}
