"use client";

import { useHorizontalScroll } from "@/hooks/useSideScroll";
import HistoryItem from "./HistoryItem";

const History = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="whitespace-nowrap overflow-x-auto">
      <HistoryItem />
    </div>
  );
};
export default History;
