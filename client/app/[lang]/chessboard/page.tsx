import { useTranslations } from "next-intl";
import Board from "./Board";
import { pgn1 } from "./examplePGN";

export default function Chessboard() {
  const t = useTranslations("Chessboard");

  return (
    <>
      <main className="relative grid min-h-screen justify-items-center text-black">
        <div className="mb-4 mt-32">
          <h2 className="font-title text-3xl">{t("title")}</h2>
        </div>
        <div className="max-w-screen-md p-5">
          <Board>{pgn1}</Board>
        </div>
      </main>
    </>
  );
}
