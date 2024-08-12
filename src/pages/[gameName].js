import Head from "next/head";
import SkeletonPage from "./SkeletonPage";
import { useRouter } from "next/router";

const skeleton = () => {
    const router = useRouter();

    let gameName = decodeURIComponent(router.asPath).substring(1);
    gameName = gameName.replaceAll("_", " ");
    console.log(router.asPath);
    console.log(gameName);
    return (
        <>
            <Head>
                <title>{ gameName }</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                <SkeletonPage title={gameName} />
            </div>
        </>
    )
}

export default skeleton;