import { Web3Button, useAddress, useUser } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getUser } from "./api/auth/[...thirdweb]";
import Worker from "../components/Worker";
import Businesses from "../components/Businesses";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  // Check if the user is logged in
  const { isLoggedIn, isLoading } = useUser();
  // Redirect to login if not logged in
  const router = useRouter();

  const address = useAddress();

  // Checks if the user is logged in and redirects to the login page if not.
  // This is a client-side function that runs after the page is loaded.
  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoading, router]);

  return (
    <div className="">
        <Hero />
      <div style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        width: "100%",
      }}>

        <Worker />
        <Businesses />
        <Web3Button
          contractAddress="0x9e15E26b62DD14B9e3ACC842434cb706382eef69"
          // onSuccess={() => router.reload()}
          action={(contract) =>
            console.log(contract)
            // contract?.call(
            //   "claim"
            //   [address as string, 1,"0x8Cb9BfE184b61c71e701Cbc783c420C88A62FD85",300]
            // )
          }
        >
          Claim
        </Web3Button>
      </div>
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