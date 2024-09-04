import Head from "next/head";

import client from "../../lib/mongodb";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import "../app/css/globals.css";
import GameListPage from "../app/page scripts/GameListPage";

const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya"});
const alegreyaSans = Alegreya_Sans({ weight: ["500"], subsets: ["latin"], variable: "--font-alegreya-sans" });

export const getServerSideProps = async () => {
    try {
      await client.connect() // `await client.connect()` will use the default database passed in the MONGODB_URI
      const db = client.db("everdeck_database")
      const dbGames = await db
      .collection("games")
      .find({})
      .sort({})
      .toArray()
      return {
        props: { gameList: JSON.stringify(dbGames) , isConnected: true }
      }
    } catch (e) {
      console.log("ERROR: Failed to fetch game list DB")
      return {
        props: { isConnected: false }
      }
    }
}


const mainPage = ({ gameList, isConnected }) => {
    return (
        <>
            <Head>
                <title>Everdeck Library</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div className={ `${alegreya.variable} ${alegreyaSans.variable}` }>
              <GameListPage allGames={gameList}/>
            </div>
        </>
    )
}

export default mainPage;
  

