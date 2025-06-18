import { chevronRightIcon } from "@/public/icons";
import Image from "next/image";

export default function TopNav() {
  return (
    <div className="bg-c-gray-4 flex w-full justify-end px-8 py-2">
      <div className="flex gap-2 items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/images/dummy-avatar.png"}
            width={48}
            height={48}
            alt="dummy-avatar"
            className="rounded-full"
            unoptimized
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-base/none font-extrabold font-avenir">
              John Stark
            </p>
            <p className="text-sm/none font-normal font-avenir">Online</p>
          </div>
        </div>
        <span className="rotate-90">{chevronRightIcon}</span>
      </div>
    </div>
  );
}
