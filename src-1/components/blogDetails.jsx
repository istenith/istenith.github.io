import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();
  console.log(location.state);
  const mdFile = location.state;
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(mdFile)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  });

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default BlogDetails;
