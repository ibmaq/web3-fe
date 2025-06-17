import { filterIcon, searchIcon } from "@/public/icons";
import Card from "./Card";

export default function Feed() {
  return (
    <>
      <div className="flex flex-col border border-c-gray-2">
        <div className="flex items-center p-3 justify-between border-b-2 border-c-gray-2">
          <p className="leading-130 font-bold">Private Messages</p>
          <div className="flex gap-2 items-center">
            <span className="p-2">{searchIcon}</span>
            <span className="rounded-lg bg-c-gray-3 p-2">{filterIcon}</span>
          </div>
        </div>
        {/* cards list */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
