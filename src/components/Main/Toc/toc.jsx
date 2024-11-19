import React, { useState, useEffect } from "react";
import "./Toc.css";

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const element = document.getElementById(id);
        return { id, offsetTop: element?.offsetTop || 0 };
      });

      const scrollPosition = window.scrollY + 100; // Add some padding for highlight
      const current = offsets.reverse().find(({ offsetTop }) => scrollPosition >= offsetTop);

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="toc-container">
      <h3>Table of Contents</h3>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
