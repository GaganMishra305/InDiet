import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import ClipPath from "../assets/svg/ClipPath";
import Image from "next/image";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="flex pt-32 mx-12">
    <div className="w-[300%]">
      <h1 className="h1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus esse quo aliquid soluta fugiat! Impedit necessitatibus quisquam, dicta dolor et ea adipisci vel pariatur cum voluptates, exercitationem alias! Voluptatem.</h1>
    </div>
<div className="w-full">
<Section>
        <div className="z-2 flex">
              <div className="z-2 flex flex-col">
                <h5 className="h5 mb-5">Want to participate in Contest</h5>
                <form  onSubmit={handleSubmit} className="">
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
                    className="h-[full]"
                  />
                   <button type="submit"> <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
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
