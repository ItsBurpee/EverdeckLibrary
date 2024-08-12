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
    // const gameID = ;
    let props = {};
    try {
      await client.connect() // `await client.connect()` will use the default database passed in the MONGODB_URI
      const db = client.db("everdeck_database")
      // get the game's data from the db using the game's name
      const dbgame = await db
        .collection("games")
        .find({title: gameName})
        .sort({})
        .toArray()
      // get the game's rules from the db using the id from the game data
      const gameRules = await db
        .collection("rules")
        .find({game_id: dbgame[0]._id})
        .sort({})
        .toArray()
      props = { props: { dbgame: JSON.stringify(dbgame), gameRules: JSON.stringify(gameRules), isConnected: true } }
    } catch (e) {
      console.error(e)
      props = { props: {isConnected: false} }
    }
    return props;
}

const skeleton = ({ dbgame, gameRules, isConnected }) => {
    const router = useRouter();
    let game = [];
    let rules = [];
    if (dbgame) {
        game = JSON.parse(dbgame)[0];
    }
    if (gameRules) {
        rules = JSON.parse(gameRules)[0];
    }
    let title = game ? game.title : "404";
    return (
        <>
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/everdeck-clam.ico"/>
            </Head>
            <div>
                { 
                    dbgame ?
                        <SkeletonPage game={game} rules={rules} /> :
                        <NotFound gameName={decodeGameName(router.asPath).substring(1)} />
                }
            </div>
        </>
    )
}

export default skeleton;