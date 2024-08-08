import Head from "next/head";

import client from "../../lib/mongodb";
import GameListPage from "./GameListPage";

/*
TEST FETCH
export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  console.log(repo)
  // Pass data to the page via props
  return { props: { repo } }
}
*/

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
      console.error(e)
      return {
        props: { isConnected: false }
      }
    }
}


const mainPage = ({ gameList, isConnected }) => {
//const mainPage = () => {
    return (
        <>
            <Head>
                <title>Everdeck Library</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
              <GameListPage allGames={gameList}/>
            </div>
        </>
    )
}

export default mainPage;
  

