"use client";
import { arrangeSectionsIcon, filterIcon, searchIcon } from "@/public/icons";
import { useRef } from "react";

export default function HeaderComp() {
  const searchInputRef = useRef(null);
  return (
    <>
      <div className="flex gap-4 items-center group">
        <div
          className="w-full border-b border-white/20 hover:border-white/80 transition-colors pb-4 flex gap-4 cursor-pointer"
          onClick={() => searchInputRef.current.focus()}
        >
          <span className="text-c-gray-6 group-hover:text-c-gray-7 transition-colors">
            {searchIcon}
          </span>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none cursor-pointer"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="rounded-lg bg-c-gray-3 p-2">{filterIcon}</span>
          <div className="flex gap-2 items-center px-3 whitespace-nowrap">
            <span>{arrangeSectionsIcon}</span>
            <p className="text-sm/normal font-medium">Arrange Sections</p>
          </div>
        </div>
      </div>
    </>
  );
}
