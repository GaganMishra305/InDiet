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
        <div className="w-1/2">
            {!loadingBusinesses ? (
                <>
                    <h2>Businesses:</h2>
                    <div className="grid">
                        {stakedTokens &&
                            stakedTokens[0].length > 0 ? stakedTokens[0]?.map((stakedToken: BigNumber) => (
                                <BusinessCard
                                    key={stakedToken.toString()}
                                    tokenId={stakedToken.toNumber()}
                                />
                            )) : (
                                <p>No businesses started.</p>
                            )
                        }
                    </div>
                </>
            ) : (
                <p>Loading businesses...</p>
            )}
        </div>
    )
};

export default Businesses;