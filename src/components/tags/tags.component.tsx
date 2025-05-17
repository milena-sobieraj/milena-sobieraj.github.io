import React from "react";
import "./tags.style.css";

interface TagListProps {
  tags: string[];
}

export const TagList = (props: TagListProps) => {
  const { tags } = props;
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`tag ${index !== tags.length - 1 ? "with-dot" : ""}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};