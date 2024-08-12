import Head from "next/head";
import SkeletonPage from "./SkeletonPage";
import NotFound from "./NotFound";
import { useRouter } from "next/router";
import client from "../../lib/mongodb";

/*
    TODO:
        -query rules db when its ready
*/

const decodeGameName = url => {
    let gameName = decodeURIComponent(url);
    return gameName.replaceAll("_", " ");
}

// get the game based on the url. need to add query for rules db when that is ready.
export const getServerSideProps = async (context) => {
    const gameName = decodeGameName(context.params.gameName);
    try {
      await client.connect() // `await client.connect()` will use the default database passed in the MONGODB_URI
      const db = client.db("everdeck_database")
      const dbgame = await db
      .collection("games")
      .find({title: gameName})
      .sort({})
      .toArray()
      return {
        props: { dbgame: JSON.stringify(dbgame) , isConnected: true }
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false }
      }
    }
}

const skeleton = ({ dbgame, isConnected }) => {
    const router = useRouter();
    const game = JSON.parse(dbgame)[0];
    let title = game ? game.title : "404";
    console.log(decodeGameName(router.asPath).substring(1));

    return (
        <>
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                { 
                    game ? <SkeletonPage game={game} /> : <NotFound gameName={decodeGameName(router.asPath).substring(1)} />
                }
            </div>
        </>
    )
}

export default skeleton;