import { useTranslations } from "next-intl";
import Board from "./Board";
import { pgn1 } from "./examplePGN";

export default function Chessboard() {
  const t = useTranslations("Chessboard");

  return (
    <>
      <main className="grid place-items-center bg-white pb-20 dark:bg-gray-800 mt-32">
        <div className="max-w-5xl px-4 py-8 lg:py-16">
          <h2 className="text-center text-4xl font-title tracking-tight text-gray-900 dark:text-white">{t("title")}</h2>
        </div>
        <div className="max-w-screen-md p-5">
          <Board>{pgn1}</Board>
        </div>
      </main>
    </>
  );
}
