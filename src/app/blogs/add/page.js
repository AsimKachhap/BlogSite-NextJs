"use client";
import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const page = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };
  const handleSubmit = () => {
    console.log("Submit button is clicked.");
    console.log(text);
  };
  return (
    <div className="mt-2 bg-white">
      <h3 className="text-2xl font-semibold text-center">
        Write your own Blog
      </h3>

      <div>
        <ReactQuill theme="snow" value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default page;
