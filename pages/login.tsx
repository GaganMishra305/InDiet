import { ConnectEmbed, useShowConnectEmbed } from "@thirdweb-dev/react";
import { getUser } from "./api/auth/[...thirdweb]";

// Set loginOptional to false to require the user to login
const loginOptional = false;

const Login = () => {
    const showConnectEmbed = useShowConnectEmbed();
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            {showConnectEmbed && (
                <ConnectEmbed
                    auth={{
                        loginOptional,
                    }}
                />
            )}
        </div>
    )
};

export default Login;

// This is a server-side function that checks if the user is logged in and redirects to the home page if not.
export async function getServerSideProps(context: any) {
    const user = await getUser(context.req);

    console.log("Checking user" + user?.address);
    if(user) {
        return {
        redirect: {
            destination: "/",
            permanent: false,
        },
        };
    }

    return {
        props: {},
    };
}