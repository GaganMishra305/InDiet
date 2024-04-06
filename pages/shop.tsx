import { useContract, useNFTs, useUser } from "@thirdweb-dev/react";
import { BUSINESSES_CONTRACT_ADDRESS } from "../constants/contracts";
import NFTCard from "../components/NFTCard";
import { getUser } from "./api/auth/[...thirdweb]";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Shop() {
    const { contract: businessesContract } = useContract(BUSINESSES_CONTRACT_ADDRESS);
    const { data: businesses } = useNFTs(businessesContract);

    const { isLoggedIn, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn && !isLoading) {
        router.push("/login");
      }
    }, [isLoggedIn, isLoading, router]);

    return (
        <div className="">
            <h2>Buy a business:</h2>
            <div className="">
            {businesses && businesses.length > 0 ? (
                businesses.map((business) => (
                    <NFTCard
                        key={business.metadata.id}
                        nft={business}
                    />
                ))
            ) : (
                <p>No businesses for sale.</p>
            )}
            </div>
        </div>
    )
};

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