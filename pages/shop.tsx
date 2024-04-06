import { useContract, useNFTs, useUser } from "@thirdweb-dev/react";
import { BUSINESSES_CONTRACT_ADDRESS } from "../constants/contracts";
import NFTCard from "../components/NFTCard";
import { getUser } from "./api/auth/[...thirdweb]";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Shop() {
    // Get the businesses contract instance
    // Get the NFTs from contract
    const { contract: businessesContract } = useContract(BUSINESSES_CONTRACT_ADDRESS);
    const { data: businesses } = useNFTs(businessesContract);

    // Get the user's login state
    const { isLoggedIn, isLoading } = useUser();
    const router = useRouter();

    // Checks if the user is logged in and redirects to the login page if not.
    useEffect(() => {
      if (!isLoggedIn && !isLoading) {
        router.push("/login");
      }
    }, [isLoggedIn, isLoading, router]);

    return (
        <div className="mt-40">
            <h2 className=" text-center text-5xl font-bold py-6">Buy a business:</h2>
            <div className="flex max-w-[1500px] justify-start px-12 items-center flex-wrap gap-12">
            {businesses && businesses.length > 0 ? (
                businesses.map((business) => (
                    <NFTCard
                        key={business.metadata.id}
                        nft={business}
                    />
                ))
            ) : (
                <p className="text-4xl text-center">No businesses for sale.</p>
            )}
            </div>
        </div>
    )
};

// This is a server-side function that checks if the user is logged in and redirects to the login page if not.
export async function getServerSideProps(context: any) {
    const user = await getUser(context.req);
  
    console.log("Checking user" + user?.address);
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