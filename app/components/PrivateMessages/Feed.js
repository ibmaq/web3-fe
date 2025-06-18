import { chevronRightIcon, filterIcon, searchIcon } from "@/public/icons";
import Card from "./Card";

export default function PrivateMessageFeedComp({
  currentIndex,
  totalFeeds,
  onPositionSwap,
}) {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex items-center p-3 justify-between border-b-2 border-c-gray-2">
          <div className="flex gap-3 items-center group">
            <p className="leading-130 font-bold">Private Messages</p>
            <div className="flex gap-2 items-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              <span
                className={`rotate-180 ${
                  currentIndex > 0
                    ? "text-c-gray-9 cursor-pointer"
                    : "text-c-gray-8"
                }`}
                onClick={() => onPositionSwap(currentIndex, currentIndex - 1)}
              >
                {chevronRightIcon}
              </span>
              <span
                className={`${
                  currentIndex < totalFeeds - 1
                    ? "text-c-gray-9 cursor-pointer "
                    : "text-c-gray-8"
                }`}
                onClick={() => onPositionSwap(currentIndex, currentIndex + 1)}
              >
                {chevronRightIcon}
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="p-2">{searchIcon}</span>
            <span className="rounded-lg bg-c-gray-3 p-2">{filterIcon}</span>
          </div>
        </div>
        {/* cards list */}
        <div className="h-full overflow-y-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card
              key={index}
              classes="border-b border-c-gray-2 last:border-b-0"
            />
          ))}
        </div>
      </div>
    </>
  );
}
