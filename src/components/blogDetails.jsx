import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import metadataParser from 'markdown-yaml-metadata-parser';


function BlogDetails() {
  const location = useLocation()
  const mdFile = location.state
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    fetch(mdFile)
      .then((response) => {
        return response.text()
      })
      .then((text) => setMarkdown(text));
  });
    
    
  const blogData = metadataParser(markdown);
  localStorage.setItem("meta", blogData.metadata)
  console.log(blogData.metadata);
  return (
    <div className="markdown-container">
      <ReactMarkdown>{blogData.content}</ReactMarkdown>
    </div>
  );
}

export default BlogDetails;
