"use client";

import HistoryItem from "./HistoryItem";
import { useHorizontalScroll } from "@/hooks/useSideScroll";

const History = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="whitespace-nowrap overflow-x-auto">
      <HistoryItem />
    </div>
  );
};
export default History;
