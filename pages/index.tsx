import { Web3Button, useAddress, useUser } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getUser } from "./api/auth/[...thirdweb]";
import Worker from "../components/Worker";
import Businesses from "../components/Businesses";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";

const Home: NextPage = () => {

  return (
    <div className="">
        <Hero />
        <Benefits/>
        <Services/>
    </div>
  );
};

export default Home;

// This is a server-side function that checks if the user is logged in and redirects to the login page if not.
export async function getServerSideProps(context: any) {
  const user = await getUser(context.req);

  // Redirect to login if not logged in
  if(!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}