import React from "react";
import TableOfContents from "./toc";

const BlogPost = () => {
  const sections = [
    { id: "What is OPD Coverage?", label: "Introduction" },
    { id: "setup", label: "Setup" },
    { id: "configuration", label: "Configuration" },
    { id: "features", label: "Features" },
    { id: "conclusion", label: "Conclusion" },
  ];

  return (
    <div className="blog-post">
      <TableOfContents sections={sections} />
      <div className="content">
        {sections.map(({ id, label }) => (
          <section id={id} key={id}>
            <h2>{label}</h2>
            <p>Content for {label}...</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
