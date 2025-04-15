import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HistoryItem from "./HistoryItem";

const History = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <HistoryItem />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default History;
