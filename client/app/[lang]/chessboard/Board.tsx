"use client";

import { useEffect, useRef } from "react";
import LichessPgnViewer from "lichess-pgn-viewer";
import "@/scss/main.scss";

export default function Board(props: any) {
  const pgn = props.children;
  const boardContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boardContainerRef.current) {
      LichessPgnViewer(boardContainerRef.current, {
        pgn: pgn,
      });
    }
  }, [pgn]);

  return <div ref={boardContainerRef}></div>;
}
