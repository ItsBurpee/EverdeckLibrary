import Head from "next/head";
import AboutPage from "../app/page scripts/AboutPage"


const about = () => {
    
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                <AboutPage />
            </div>
        </div>
    )
}

export default about;