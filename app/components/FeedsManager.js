"use client";
import React, { useState } from "react";
import PrivateMessageFeedComp from "./PrivateMessages/Feed";
import PublidFeedComp from "./PublicFeed/Feed";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function FeedsManager() {
  const [feedsList, setFeedsList] = useState([
    "private-messages",
    "public-feed",
    // can be upto 8 different feeds side-by-side, the arrangement can be updated from inside the feed component itself, need to display
  ]);

  const handlePositionSwap = (currentIndex, targetIndex) => {
    if (targetIndex < 0 || targetIndex >= feedsList.length) return;

    const newFeedsList = [...feedsList];
    const temp = newFeedsList[currentIndex];
    newFeedsList[currentIndex] = newFeedsList[targetIndex];
    newFeedsList[targetIndex] = temp;
    setFeedsList(newFeedsList);
  };

  const renderFeed = (feedType, index) => {
    const isFirst = index === 0;
    const isLast = index === feedsList.length - 1;

    const panelStyle = {
      borderRadius: isFirst ? "12px 0 0 12px" : isLast ? "0 12px 12px 0" : "0",
      overflow: "hidden",
    };

    switch (feedType) {
      case "private-messages":
        return (
          <Panel
            key={`private-${index}`}
            defaultSize={50}
            // style={panelStyle}
          >
            <PrivateMessageFeedComp
              currentIndex={index}
              totalFeeds={feedsList.length}
              onPositionSwap={handlePositionSwap}
            />
          </Panel>
        );
      case "public-feed":
        return (
          <Panel
            key={`public-${index}`}
            defaultSize={50}
            // style={panelStyle}
          >
            <PublidFeedComp
              currentIndex={index}
              totalFeeds={feedsList.length}
              onPositionSwap={handlePositionSwap}
            />
          </Panel>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="border border-c-gray-2 rounded-xl overflow-hidden h-screen max-h-[calc(100vh-184px)]">
        <PanelGroup direction="horizontal">
          {feedsList.map((feed, index) => (
            <React.Fragment key={`fragment-${index}`}>
              {renderFeed(feed, index)}
              {index < feedsList.length - 1 && (
                <PanelResizeHandle className="w-1 bg-c-gray-2 hover:bg-primary-blue transition-colors" />
              )}
            </React.Fragment>
          ))}
        </PanelGroup>
      </div>
    </>
  );
}
