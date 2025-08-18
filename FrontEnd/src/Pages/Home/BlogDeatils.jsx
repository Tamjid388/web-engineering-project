import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get("/blogs.json")
      .then((res) => {
        const foundBlog = res.data.find((b) => String(b.id) === id);
        setBlog(foundBlog);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg animate-pulse">Loading blog details...</p>
      </div>
    );
  }

  // Generate section headings for TOC
  const sectionIds = blog.content.map((_, index) => `section-${index}`);

  return (
    <div className="container mx-auto my-12 px-4 lg:px-16 flex flex-col lg:flex-row gap-12">
      
      {/* Blog Content */}
      <div className="lg:flex-1">
        

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          By <span className="font-semibold">{blog.author}</span> • {blog.date} •{" "}
          <span className="italic">{blog.tags.join(", ")}</span>
        </p>

        <div className="mb-10 relative group">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
        </div>

        {/* Blog Sections */}
        <div className="prose lg:prose-lg max-w-4xl mx-auto prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
          {blog.content.map((para, index) => (
            <p key={index} id={sectionIds[index]} className="mb-5">{para}</p>
          ))}
        </div>
      </div>

      {/* Table of Contents */}
      <div className="lg:w-80 flex-shrink-0 sticky top-32 h-max self-start bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">📑 Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {sectionIds.map((sectionId, index) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className="hover:text-blue-600 hover:underline transition-colors"
              >
                Section {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetails;
