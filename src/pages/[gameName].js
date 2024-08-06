import { useRouter } from "next/router";

const Game = () => {
    const router = useRouter();
    // const gameName = router.query.gameName.replaceAll("_", " ");
    const gameName = router.query.gameName;
    console.log(router.query.gameName);
    return (
        <h1>Game: { gameName }</h1>
    );
}

export default Game;