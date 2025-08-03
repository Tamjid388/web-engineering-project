import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sectiontitle } from "../../Components/Sectiontitle/Sectiontitle";

export const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/blogs.json")
      .then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" my-16 container mx-auto">
      <Sectiontitle
        title="From Fitness Tips to Style Trends"
        subtitle="Explore expert insights, workout routines, and gear guides to elevate your fitness journey with FitFlex."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 rounded-none  shadow-sm"
          >
            <figure className="">
              <img
                src={blog.image}
                className="h-[300px] w-full object-cover  transition-transform duration-300 hover:scale-110"
                alt="blog-contents"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.summary}</p>
              <div className="card-actions justify-start">
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
