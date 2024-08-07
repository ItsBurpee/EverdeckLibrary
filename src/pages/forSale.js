import Head from "next/head";
import ForSalePage from "./ForSalePage";


const forSalePage = () => {
    
    return (
        <>
            <Head>
                <title>For Sale</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                <ForSalePage />
            </div>
        </>
    )
}

export default forSalePage;
  
