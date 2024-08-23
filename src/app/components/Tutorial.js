import Image from "next/image";
import styles from "../css/tutorial.module.css";

const Tutorial = () => {
    const handleJump = id => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            {/* Jump To Section links */}
            <div className={styles.sectionJumpContainer}>
                <div className={styles.sectionJump}>
                    <div className={styles.jumpBtn} onClick={() => handleJump("tutGameCards")}>Game Cards</div>
                    <div className={styles.jumpBtn} onClick={() => handleJump("tutFindGame")}>Finding a game</div>
                    <div className={styles.jumpBtn} onClick={() => handleJump("tutGameInfoPage")}>Rules Page</div>
                </div>
            </div>
            <div className={styles.tutorial}>

                {/* Game Cards Section */}
                <div id="tutGameCards" className={styles.gameCards}>
                    <h2>Game Cards</h2>
                    <p>
                        The Main page of the app contains many cards. One for each game available on this app.
                    </p>
                    <figure className={styles.tutImg}>
                        <Image src={"/cardExample.png"} width={461} height={233} alt="Game Card" className={styles.exImage} />
                        <figcaption><i>An example card for the game: For Sale</i></figcaption>
                    </figure>
                    <p>
                        Each card contains the game's title in the top left, game stats in the top right,
                        a short description in the bottom left and a warning icon in the bottom right if the 
                        game has any warnings. The game's box art is also visible on the left side of the card but only on bigger devices.
                    </p>
                    {/* Stats sub section */}
                    <div>
                        <h3>Game Stats</h3>
                        <div className={styles.tutStats}>
                            <div>
                                <Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} height={25} width={25} alt="Person icon" />
                                <p>:</p>
                                <p className={styles.statDesc}>The amount of players that the game can support</p>
                            </div>
                            <div>
                                <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} height={25} width={25} alt="Stopwatch icon" />
                                <p>:</p>
                                <p className={styles.statDesc}>Average time it takes to complete the game in minutes</p>
                            </div>
                            <div>
                                <Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} height={25} width={25} alt="Signal Icon" />
                                <p>:</p>
                                <p className={styles.statDesc}>The complexity or weight of the game</p>
                            </div>
                        </div>
                    </div>
                    {/* Warnings sub section */}
                    <div className={styles.tutWarnings}>
                        <h3>Warnings</h3>
                        <p>There are three kinds of warning icons on the cards:</p>
                        <div className={styles.tutWarnIcons}>
                            <div>
                                <div className={`${styles.exCircleIcon} ${styles.blue}`}>!</div>
                                <p>:</p>
                                <p className={styles.warnDesc}>The game requires extra components to play (ex. coins)</p>
                            </div>

                            <div>
                                <div className={`${styles.exCircleIcon} ${styles.yellow}`}>!</div>
                                <p>:</p>
                                <p className={styles.warnDesc}>
                                    The game does not map perfectly to the Everdeck. (See <span onClick={() => handleJump("tutMapping")}>mapping strength</span> section in Finding a Game)
                                </p>
                            </div>

                            <div>
                                <div className={`${styles.exCircleIcon} ${styles.red}`}>!</div>
                                <p>:</p>
                                <p className={styles.warnDesc}>
                                    The game has both types of warnings.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>
                        Once you see a game that you are interested in, simply click or tap on the card
                        to go to that game's rule page.
                    </p>
                </div>

                {/* Finding a Game section */}
                <div id="tutFindGame" className={styles.findGame}>
                    <h2>Finding a game</h2>
                    {/* Searching sub section */}
                    <div>
                        <h3>Searching</h3>
                        <p>
                            If you already know the name of the game you are looking for, then you can
                            use the search bar located at the top of the page.
                        </p>
                    </div>
                    {/* Sorting Sub section */}
                    <div>
                        <h3>Sorting</h3>
                        <p>
                            Just under the search bar, there are four buttons that allow you to sort the cards
                            in ascending or descending order. You can sort by name, player count, play time or 
                            complexity.
                        </p>
                    </div>
                    {/* Filtering sub section */}
                    <div>
                        <h3>Filtering</h3>
                        <div className={styles.tutFilter}>
                            <p>Pressing the filter button: </p>
                            <div className={`${styles.exCircleIcon} ${styles.blue}`}>
                                <Image src={"/filter-svgrepo-com.svg"} height={25} width={25} alt="filter icon" />
                            </div>
                            <p>will bring up the filter menu where you can get games with specific attributes.</p>
                        </div>
                        <h4>Player Count, Play Time and Complexity</h4>
                        <p>
                            In the filter menu, sliders are provided that allow you to filter by player count,
                            play time and complexity.
                        </p>
                        <figure className={styles.tutImg}>
                            <Image src={"/filterEx/sliderEx.png"} width={358} height={325} className={styles.exImage} />
                            <figcaption><i>The Sliders from the filter menu</i></figcaption>
                        </figure>
                        <p>You can choose a minimum amount and a maximum amount for each category</p>
                        <div id="tutMapping" className={styles.tutMapping}>
                            <h4>Mapping Strength</h4>
                            <p>The Filter Menu includes a dropdown that lets you select a mapping strength </p>
                            <figure className={styles.tutImg}>
                                <Image src={"/filterEx/mappingEx.png"} width={373} height={185} className={styles.exImage} />
                                <figcaption><i>The mapping strength dropdown when expanded</i></figcaption>
                            </figure>
                            <p>
                                Mapping strength refers to how well the Everdeck can "map" the card components for a given game:
                            </p>
                            <p>
                                <b>Perfect</b>: The game is completely playable with the Everdeck. 
                            </p>
                            <p>
                                <b>High</b>: The game is playable with the Everdeck,
                                but may require minor changes or are harder to play with the Everdeck (may require
                                more mental tracking than the original game).
                            </p>
                            <p>
                                <b>Low</b>: The game requires larger changes (may even be missing
                                features) or a greater amount of mental tracking to play with the Everdeck.
                            </p>
                        </div>

                        <div id="tutExtComps">
                            <h4>External Components</h4>
                            <p>
                                In order to play some games with the Everdeck, external components may be required.
                                Dice or chips are common examples.
                            </p>
                            <figure className={styles.tutImg}>
                                <Image src={"/filterEx/extCompEx.png"} width={326} height={161} className={styles.exImage} />
                                <figcaption><i>External Components checkboxes</i></figcaption>
                            </figure>
                            <p>
                                You can filter games by the external components they require. You can also use the toggle all
                                button if you want to find games that are playable purely with the Everdeck.
                            </p>
                        </div>
                        <div>
                            <h4>Game Type</h4>
                            <p>
                                Using the filter menu, you can also filter games by their type. 
                            </p>
                            <figure className={styles.tutImg}>
                                <Image src={"/filterEx/gameTypeEx.png"} width={326} height={174} className={styles.exImage} />
                                <figcaption><i>Game Types checkboxes</i></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div id="tutGameInfoPage" className={styles.tutGameInfoPage}>
                    <h2>Game Information Page</h2>
                    <p>
                        Once you have found a game you are interested in and clicked on its card,
                        you will be taken to that game's rule page.
                    </p>
                    <div>
                        <h3>Basic info</h3>
                        <p>
                            At the top of the rules page, there is some basic info about the game.
                            There is the image of the game, the game stats that were on the card, 
                            a longer summary and a link to the BoardGameGeek page for the original game.
                            Below, any warnings are stated. 
                        </p>
                    </div>
                    <div>
                        <h3>Game Rules / Card Zones</h3>
                        <p>
                            Under the basic info, you can find the card zones and rules section.
                            hovering over the card zone will highlight the area on the card that you use
                            in the game.
                        </p>
                        <figure className={styles.tutImg}>
                            <Image src={"/filterEx/cardZoneEx.png"} width={339} height={344} className={styles.exImage} />
                            <figcaption><i>Card Zone being highlighted</i></figcaption>
                        </figure>
                        <p>
                            You may have also noticed that certain words in the rules are highlighted.
                            These are keywords that relate to the card zones and they are highlighted
                            when the card zone is highlighted. Hovering or tapping on the keywords will also highlight the related card zones.
                        </p>
                    </div>
                    <div>
                        <h3>Card Table</h3>
                        <p>
                            The section that follows the rules is the card table. The card table
                            shows what each card in the Everdeck translates to in regards to the current game.
                            Hovering over a card in the card table or tapping on the card will bring up the card zones 
                            that the card belongs to.
                        </p>
                        <figure className={styles.tutImg}>
                            <Image src={"/filterEx/cardTableEx.png"} width={350} height={201} className={styles.exImage} />
                            <figcaption><i>Card Table being hovered</i></figcaption>
                        </figure>
                        <p>
                            Below the table is the count of total cards that the game uses and how many cards
                            belong to each card zone. Any extra components are also listed at the bottom of the page.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tutorial;