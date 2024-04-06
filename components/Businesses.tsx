import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { STAKING_CONTRACT_ADDRESS } from "../constants/contracts";
import { BigNumber } from "ethers";
import BusinessCard from "./BusinessCard";

const Businesses = () => {
    // Get the user's address needed for staking info
    const address = useAddress();

    // Get the staking contract instance
    // Get the staked tokens for the user
    const { contract: stakingContact } = useContract(STAKING_CONTRACT_ADDRESS);
    const { data: stakedTokens, isLoading: loadingBusinesses } = useContractRead(stakingContact, "getStakeInfo", [
        address,
    ]);
    
    return (
        <div className="p-8 m-10">
        <h2 className="h2 ">Owned NFT:</h2>
        <div className="flex flex-wrap gap-4">
            {!loadingBusinesses ? (
                <>
                    <div className="grid">
                        {stakedTokens &&
                            stakedTokens[0].length > 0 ? stakedTokens[0]?.map((stakedToken: BigNumber) => (
                                <BusinessCard
                                    key={stakedToken.toString()}
                                    tokenId={stakedToken.toNumber()}
                                />
                            )) : (
                                <p className="h4">No NFT...Sorry.</p>
                            )
                        }
                    </div>
                </>
            ) : (
                <p>Loading NFTs...</p>
            )}
        </div>
        </div>
    )
};

export default Businesses;