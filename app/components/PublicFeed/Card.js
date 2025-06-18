"use client";

import React, { useState } from "react";
import {
  checkIcon,
  chevronRightIcon,
  copyIcon,
  telegram,
} from "@/public/icons";
import Image from "next/image";

export default function Card({ classes }) {
  const [data, setData] = useState({
    visibility: "private",
    platform: "telegram",
    content: "https://x.com/theunipcs/status/1935320587439632411",
    timestamp: "2025-06-18T13:04:39.843294",
    epochTimestamp: 1750251879,
    channel: "KEETARDS",
    authorUsername: "unipcstgbot",
    authorName: "\ufe0f Unipcs Bonk Long | KOL https://x.com/theunipcs",
    authorAvatar:
      "https://telecord.app/api/media/2e3f0462d128f8ab22aa8749203ebc8f4d8577e6e328d6cd94d130b22f98a14a.jpg",
    authorDisplay: "Unipcs \ud83d\udc36 Bonk Guy",
    authorDisplayColor: null,
    sourceAvatar:
      "https://telecord.app/api/media/b69e04f1e7bf806ed27520cb15709d4c481b5c8cc2eb2aa2dd5fbe0ee53c268b.jpg",
    sourceUrl: null,
    replyAuthor: null,
    replyContent: null,
    replySource: null,
    flags: {
      cashtags: ["RGC"],
      addresses: ["9nP2CnVYiRJUatMsK2u66LiyKqbEd8pQZc6NRfdXpump"],
      urls: ["https://x.com/theunipcs/status/1935320587439632411"],
    },
  });

  const [copied, setCopied] = useState(null); // { flagType, value }

  const handleCopy = (flagType, value) => {
    navigator.clipboard.writeText(value);
    setCopied({ flagType, value });
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <>
      <div
        className={`bg-primary-blue p-2 flex justify-between gap-2.5 ${classes}`}
      >
        <div
          className="p-1 rounded-full border w-17 h-17 shrink-0"
          style={{
            borderColor: "#8DFF2F",
          }}
        >
          <Image
            src={data?.authorAvatar || "/images/dummy-avatar.png"}
            width={60}
            height={60}
            alt="dummy-avatar"
            className="rounded-full"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p
                className="text-base font-semibold leading-140"
                style={{
                  color: "#8DFF2F",
                }}
              >
                {data?.authorDisplay || "NA"}
              </p>
              <p className="text-sm text-c-gray-1 -tracking-1">
                {data?.epochTimestamp
                  ? new Date(data.epochTimestamp * 1000).toLocaleTimeString(
                      [],
                      { hour12: false }
                    )
                  : "NA"}
              </p>
              <p>{chevronRightIcon}</p>
              <Image
                src={data?.sourceAvatar || "/images/dummy-group-img.jpg"}
                width={16}
                height={16}
                alt="dummy-group-img"
                className="rounded-full w-4 h-4 object-cover"
                unoptimized
              />
              <p className="text-xs">{data?.channel}</p>
            </div>
            <p>{data?.content}</p>
          </div>
          <div className="flex items-end">
            <div className="flex flex-col gap-1 w-full">
              {data?.flags &&
                Object.entries(data.flags).map(([flagType, arr]) =>
                  Array.isArray(arr) && arr.length > 0
                    ? arr.map((value, tagIndex) => (
                        <div
                          className="pill outer font-avenir rounded-12.5"
                          key={flagType + tagIndex}
                        >
                          <div
                            className="pill copy font-avenir rounded-5.75 flex items-center gap-1 cursor-pointer"
                            onClick={() => handleCopy(flagType, value)}
                          >
                            <p>
                              {flagType === "cashtags" ? "$ " : ""}
                              {flagType === "addresses"
                                ? `${value.slice(0, 4)}..${value.slice(-4)}`
                                : value}
                            </p>
                            <span>
                              {copied &&
                              copied.flagType === flagType &&
                              copied.value === value
                                ? checkIcon
                                : copyIcon}
                            </span>
                          </div>
                        </div>
                      ))
                    : null
                )}
            </div>
            <span className="p-1.5 rounded-full bg-transparent hover:bg-c-gray-5/40">
              {telegram}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
