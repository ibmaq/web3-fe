"use client";

import React, { useState } from "react";
import {
  checkIcon,
  chevronRightIcon,
  copyIcon,
  telegram,
  discord,
} from "@/public/icons";
import Image from "next/image";

export default function Card({ classes, data }) {
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
              {data?.platform === "telegram" ? telegram : discord}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
