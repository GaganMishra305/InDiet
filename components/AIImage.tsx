import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import ClipPath from "../assets/svg/ClipPath";
import Image from "next/image";
import { GradientLight } from "./design/Benefits";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { robot } from "../assets";

function AIImage() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/", {
        file: file,
      });
      const data = await res.json();
      setUpdateSuccess(true);
      console.log(data); // Assuming this will contain NFT tokens
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center pt-32 mx-12">
        <h1 className="text-center text-4xl font-bold mb-8">
          Upload Your Image to Earn NFT Tokens for Exclusive NFTs
        </h1>
        <div className="w-full md:max-w-4xl">
          <Section className="shadow-md rounded-lg p-8">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full">
                <h5 className="mb-4">Want to participate in the Contest?</h5>
                <form onSubmit={handleSubmit} className="flex w-full">
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    ref={fileRef}
                    hidden
                    accept="image/*"
                  />
                  <Image
                    onClick={() => fileRef.current.click()}
                    src={file ? URL.createObjectURL(file) : robot}
                    alt="profile"
                    className="w-64 h-48 rounded-full cursor-pointer border-4 border-blue-400 transition-all hover:border-blue-600"
                  />
                  <button type="submit" className="ml-4 px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 focus:outline-none">
                    <p className="font-semibold text-sm">Explore More</p>
                    <Arrow className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>
            <GradientLight />
            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                <Image
                  src={robot}
                  alt="robot"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <ClipPath />
          </Section>
        </div>
      </div>
    </>
  );
}

export default AIImage;
