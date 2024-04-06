import { MediaRenderer, useAddress, useContract, useOwnedNFTs, useTokenBalance } from "@thirdweb-dev/react";
import { TOKEN_CONTRACT_ADDRESS, USER_CONTRACT_ADDRESS } from "../constants/contracts";
import gojo from "../assets/gojo.jpeg"
import Image from "next/image";

const Worker = () => {
    const address = useAddress();

    const { contract: workerContract } = useContract(USER_CONTRACT_ADDRESS);
    const { data: ownedWorkers, isLoading: loadingWorker } = useOwnedNFTs(workerContract, address);

    const { contract: tokenContract } = useContract(TOKEN_CONTRACT_ADDRESS);
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    const truncateNumber = (num: string) => {
        return num.slice(0, 6);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 bg-[#171424] shadow-[#635797] shadow-2xl py-4 px-8 rounded-2xl">
            {!loadingWorker && (
                ownedWorkers && ownedWorkers.length > 0 ? (
                    ownedWorkers.map((worker) => (
                        <div  key={worker.metadata.id}>
                            <div className="flex w-full justify-center flex-col items-center">
                                <MediaRenderer
                                    key={worker.metadata.id}
                                    // loader={() => worker.metadata.image ?? ""} 
                                    src={worker.metadata.image}
                                    className="aspect-auto"
                                    // alt="nft"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div>
                                <p className="font-bold">{worker.metadata.name} - ID: #{worker.metadata.id}</p>
                                {tokenBalance && (
                                    <p>Balance: {truncateNumber(tokenBalance?.displayValue as string)} {tokenBalance?.symbol}</p>
                                )}
                            </div>
                        </div>
                    ))
                ) : <div>
                <div className="flex w-full justify-center flex-col items-center">
                    <Image
                        src={gojo}
                        className="aspect-auto"
                        alt="Gojo Satoru"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <p className="font-bold">IDLE USER - ID: #ID</p>
                    <h4 className="h6">YOU WILL GET YOUR OWN NFT AFTER VERIFICATION</h4>
                </div>
            </div>
    )}
        </div>
        </div>
    )
};

export default Worker;