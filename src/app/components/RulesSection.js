import styles from "../css/rulesSection.module.css";

export default function RulesSection() {

    return (
            <div className={styles.rulesSection}>
                <div className={styles.title}>
                    <h2>Game Rules</h2>
                </div>
                <div className={styles.mainText}>
                    <h3>Components</h3>
                    <ul>
                        <li>30 Property Cards (Numbered 1-30)</li>
                        <li>30 Currency Cards (Value $0-$15,000--skipping $1,000--two of each)</li>
                        <li>60 $1,000 Coins</li>
                        <li>12 $2,000 Coins</li>
                    </ul>
                    <h3>Objective of the Game</h3>
                    <p>All players try to purchase the most valuable properties with the least amount of money and then turn around and sell those properties for the highest-valued Currency Cards. Whoever has earned the most money at the end of the game wins!</p>
                    <h3>Setup</h3>
                    <p>Separate the cards by type (Property and Currency) and shuffle each  pile. Set aside the Currency Cards. They will be used in the second half of the game. Place the Property Cards face down as a deck.
                    </p>
                        <ul>
                            <li>With 3-4 players, give each person two $2,000 Coins and fourteen $1,000 Coins.</li>
                            <li>With 5-6 players, give each person two $2,000 Coins and ten $1,000 Coins.</li>
                        </ul>
                    <p>
                        With three players, remove six Property and six Currency Cards from the game without looking at them. With four players, remove two Property and two Currency Cards . These cards are discarded and placed back into  the box.
                    </p>
                    <h3>Gameplay</h3>
                    <p><b>Phase 1: Buying Properties</b></p>
                    <p> Setup: Turn face up the number of Property Cards equal to the number of players For example, in a four player game, turn up four Property Cards. All of the face-up properties will now be auctioned so that no player goes  empty-handed. Each player may bid or pass.</p>
                    <p><b>Bidding</b></p>
                    <p>The player who lives in the largest house begins and lays down any number of his Coins onto the table. Play then continues clockwise around the table. The next player must decide whether he will bid or pass.If he bids, the bid amount must be more than the previous bid. Bidding continues around the table for as many times as necessary until  all players have passed.</p>
                    <p><b>Passing</b></p>
                    <p>If a player passes, he takes the property that remains on the table  with the lowest value. He also takes back half of his bid (rounded  down). For example, if a player had previously bid $3,000, but ultimately decides to pass, he takes back $1,000 into his hand.
                        <br></br>The rest of the money is returned to the bank and is placed out of the game. After all players but one have passed, the remaining bidding  player takes the highest-valued property, but pays the full amount of  his bid to the bank.
                        <br></br>It is not necessary to bid anything to gain the least valuable property. You can pass, pay nothing and secure the least valuable  property at no charge.
                    </p>
                    <p><i>Tip: Keep your money secret!</i></p>
                    <p>Purchased properties are placed face down in front of the player who purchased them.The player who took the most valuable property turns over the next  set of Property Cards for auction and continues play by bidding or  passing.This continues until all of the Property Cards have been sold.When all Property Cards have been sold, Phase 1 is finished and  unused Coins are kept by the players. They will be worth their face  value at the end of the game.</p>
                    <p><b>Phase 2: Selling Properties</b></p>
                    <p>It's time to sell your Property Cards and earn some money! In this  phase, the Property Cards will be sold for Currency Cards. As in Phase  1, the same number of Currency Cards will be turned face up as there are  players.                    </p>
                    <p>Each player takes his Property Cards into his hand and places one  Property Card face down in front of him. Once all of the other players  have their face-down Property Card ready to play, all players turn over  their Property Cards simultaneously.The player who has played the most valuable Property Card takes the highest-valued Currency Card.The player who has played second most valuable Property Card takes  the second highest-valued Currency Card, and so on. Property Cards are  then discarded from the game.</p>   
                    <p><b>End of the Game</b></p>
                    <p>The game ends when all players have sold all of their properties.  Players add up their Currency Cards and remaining Coins and the richest player wins! Ties are resolved in favor of the player with the most remaining Coins.</p>

                </div>
            </div>
            
    )

}