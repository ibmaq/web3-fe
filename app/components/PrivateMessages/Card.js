import { chevronRightIcon, copyIcon, telegram } from "@/public/icons";
import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="bg-primary-blue p-2 flex justify-between items-center gap-2.5 border-b border-c-gray-2">
        <div
          className="p-1 rounded-full border w-17 h-17 shrink-0"
          style={{
            borderColor: "#8DFF2F",
          }}
        >
          <Image
            src={"/images/dummy-avatar.png"}
            width={60}
            height={60}
            alt="dummy-avatar"
            className="rounded-full"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p
                className="text-base font-semibold leading-140`"
                style={{
                  color: "#8DFF2F",
                }}
              >
                Trader Joe
              </p>
              <p className="text-sm text-c-gray-1 -tracking-1">14:03:20</p>
              <p>{chevronRightIcon}</p>
              <p className="text-xs">Pixsellz Team</p>
            </div>
            <p>
              Insider alpha: 0xfssf312134sfasdcasdfg is deploying a governance
              token for that AI project tomorrow.
            </p>
          </div>
          <div className="flex items-end">
            <div className="flex flex-col gap-1 w-full">
              <div className="pill outer font-avenir rounded-12.5">
                <div className="pill copy font-avenir rounded-5.75">
                  <p>$PEPE</p>
                  <p>{copyIcon}</p>
                </div>
                <div className="pill inner font-avenir rounded-5.75">
                  <p>$PEPE</p>
                </div>
              </div>
              <div className="pill outer font-avenir rounded-12.5">
                <div className="pill copy font-avenir rounded-5.75">
                  <p>$PEPE</p>
                  <p>{copyIcon}</p>
                </div>
                <div className="pill inner font-avenir rounded-5.75">
                  <p>$PEPE</p>
                </div>
              </div>
            </div>
            <span>{telegram}</span>
          </div>
        </div>
      </div>
    </>
  );
}
