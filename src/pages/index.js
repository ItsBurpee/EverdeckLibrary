import Head from "next/head";

import client from "../../lib/mongodb";
import GameListPage from "./GameListPage";

//Initial MongoDB section. Doesn't function but pings to the server are sucessful
const ConnectionStatus = {
    isConnected: Boolean
};  

export const getServerSideProps = async () => {
    try {
      await client.connect() // `await client.connect()` will use the default database passed in the MONGODB_URI
      return {
        props: { isConnected: true }
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false }
      }
    }
}
  
const mainPage = () => {
    return (
        <>
            <Head>
                <title>Everdeck Library</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <GameListPage />
        </>
    )
}

export default mainPage;
  

