import Head from "next/head";
import AboutPage from "./AboutPage.js";


const forSalePage = () => {
    
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                <AboutPage />
            </div>
        </>
    )
}

export default forSalePage;