"use client";
import { useState } from "react";
import Feed from "./PrivateMessages/Feed";

export default function FeedsManager() {
  const [feedsList, updateFeedsList] = useState([
    "private-messages",
    "public-feed",
  ]);
  return (
    <>
      <div className="flex border border-c-gray-2">
        {feedsList.map((feed) => (
          <Feed key={feed} />
        ))}
      </div>
    </>
  );
}
