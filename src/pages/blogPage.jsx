// eslint-disable-next-line
import React, { useState } from "react";
import { motion } from "framer-motion";
import blogData from "../data/blogData";
import { BlogCard } from "../components/blogCards";
import Footer from "../components/footer";
// eslint-disable-next-line
import SearchIcon from "@mui/icons-material/Search";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredblogs, setFilteredblogs] = useState(blogData);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = blogData.filter((blog) => {
      const titleMatch = blog.blog_title
        .toLowerCase()
        .includes(value.toLowerCase());
      const tagsMatch = blog.tags.some((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      );
      return titleMatch || tagsMatch;
    });

    setFilteredblogs(filtered);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="center-header-div">
        <h2 className="center-heading">BLOGS</h2>
      </div>

      <SearchIcon className="search-icon" />
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder=" search blogs..."
        />
      </div>

      <div
        className="blogcard-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {filteredblogs.map((contents) => (
          <BlogCard
            key={contents.id}
            image={contents.image}
            blog_title={contents.blog_title}
            author={contents.author}
            tags={contents.tags}
            description={contents.description}
            mdfile={contents.mdfile}
            style={{ flex: "1 10 50%", maxWidth: "50%" }}
          />
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
