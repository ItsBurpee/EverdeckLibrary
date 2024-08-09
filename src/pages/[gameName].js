import Head from "next/head";
import SkeletonPage from "./SkeletonPage";


const skeleton = () => {
    
    return (
        <>
            <Head>
                <title>Title</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                <SkeletonPage />
            </div>
        </>
    )
}

export default skeleton;