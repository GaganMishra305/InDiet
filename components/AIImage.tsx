import React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Arrow from "../assets/svg/Arrow";
import { new_robo5 } from "../assets";
import { Web3Button, useAddress } from "@thirdweb-dev/react";

function AIImage() {
  const fileRef = useRef(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [scoreData, setScoreData] = useState();
  const [nameData, setNameData] = useState();
  const address = useAddress();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // console.log(e.target)
      const formdata = new FormData();
      if (!file) {
        return;
      }
      formdata.append("image", file);
      const res = await axios.post(
        "http://localhost:4000/recognize_food",
        formdata
      );
      const { name, score } = res.data;
      setScoreData(score);
      setNameData(name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row pt-32 mx-12 z-2">
        <div className="w-[100%] p-24">
          <h1 className="text-center text-4xl font-bold mb-8">
            Upload Your Image to Earn NFT Tokens for Exclusive NFTs
          </h1>
          <div className="font-code text-base font-semibold py-2">
            <p className="h6">{(nameData && scoreData) ? (
              <> <p>Name of Food : {nameData}</p>
                <p>Score : {scoreData}</p> </>) : "Submit Your Photo by clicking on img to get Result"}</p>
            {scoreData && <Web3Button
              contractAddress={"0x8Cb9BfE184b61c71e701Cbc783c420C88A62FD85"}
              action={(contract) => contract.erc20.mintTo(address, scoreData / 10)
              }
              onSuccess={() => alert("Congo")}

            >
              Collect Token
            </Web3Button>}
          </div>
        </div>
        <div className="w-full">
          <section>
            <div className="z-2 flex flex-col">
              <h5 className="h5 mb-5  font-code font-semibold text-center">Want to participate in Contest</h5>
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
                  src={file ? URL.createObjectURL(file) : new_robo5}
                  alt="profile"
                  width={700}
                  height={700}
                  className="rounded-xl"
                />
                <button type="submit">
                  <p className="ml-auto font-code text-base font-bold py-4 text-n-1 uppercase tracking-wider">
                    Submit Image
                  </p>
                  <Arrow />
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AIImage;