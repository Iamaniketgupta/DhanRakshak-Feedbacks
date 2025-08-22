"use client";
import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxChars?: number;
}

export const ReadMore: React.FC<ReadMoreProps> = ({ text, maxChars = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  const needsTruncation = text.length > maxChars;

  const truncatedText = needsTruncation
    ? text.slice(0, maxChars) + "..."
    : text;

  return (
    <div className="pl-4">
      <p className="text-gray-700 leading-relaxed text-justify">
        {expanded ? text : truncatedText}
      </p>

      {needsTruncation && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-amber-600 font-medium hover:underline focus:outline-none"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};
