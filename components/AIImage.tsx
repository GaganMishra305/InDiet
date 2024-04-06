import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import ClipPath from "../assets/svg/ClipPath";
import Image from "next/image";
import { GradientLight } from "./design/Benefits";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { robot } from "../assets";
import { Web3Button } from "@thirdweb-dev/react";

function AIImage() {
  const fileRef = useRef(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [formData, setFormData] = useState({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // console.log(e.target)
      const formdata = new FormData();
      formdata.append("image", file);
      const res = await axios.post(
        "http://localhost:4000/recognize_food",
        formdata
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="flex pt-32 mx-12">
    <div className="w-[300%]">
    <h1 className="text-center text-4xl font-bold mb-8">
          Upload Your Image to Earn NFT Tokens for <br></br>Exclusive NFTs
        </h1>
      <div>
        {/* <Web3Button 
          
        >
          Collect Token
        </Web3Button> */}
      </div>
    </div>
<div className="w-full">
<Section>
              <div className="z-2 flex flex-col">
                <h5 className="h5 mb-5">Want to participate in Contest</h5>
                <form onSubmit={handleSubmit} className="">
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
                    width={350}
                    height={350}
                  />
                  <button type="submit">
                    {" "}
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
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
                  width={500}
                  height={500}
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