import styles from "../css/mappingTable.module.css";
import Image from "next/image";
//The generic table which will have information passed into it

//TODO: It is currently causing a hydration error
//Needs to actually take in paramaters and use them to fill table

export default function MappingTable({
    tableColor,
    tableCards
}) {

    const cardColors = {
        black: {
            club: "/everdeckSuits/everdeck-suits-club.svg", 
            spade: "/everdeckSuits/everdeck-suits-spade.svg"
        },
        red: {
            heart: "/everdeckSuits/everdeck-suits-heart.svg", 
            diamond: "/everdeckSuits/everdeck-suits-diamond.svg"
        },
        yellow: {
            coin: "/everdeckSuits/everdeck-suits-coin.svg", 
            crown: "/everdeckSuits/everdeck-suits-crown.svg"
        },
        blue: {
            moon: "/everdeckSuits/everdeck-suits-moon.svg", 
            star: "/everdeckSuits/everdeck-suits-star.svg"
        }
    }
    const colorStyles = {
        black: styles.tableCard,
        red: styles.redTable,
        yellow: styles.yellowTable,
        blue: styles.blueTable
    }

    const cardRanks = ["0","1","2","3","4","5","6","7","8","9","X","J","Q","A"];

    const targetColor = cardColors[tableColor];
    const targetSuits = Object.keys(targetColor);


    function findByRankSuit(targetObject, targetRank, targetSuit) {
        return targetObject.find((card) => {return (card.rank === targetRank && card.suit === targetSuit)});
    }

    return (
        <div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th></th>
                    {Object.entries(targetColor).map((suit) => (
                        <th key={suit[0]}><Image src={suit[1]} height={30} width={30} alt={suit[0]} /></th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {cardRanks.map((rank) => (
                        <tr key={tableColor + "_" + rank}>
                            <td><h3>{rank}</h3></td>
                            {
                                targetSuits.map((suit) => {
                                    const targetCard = findByRankSuit(tableCards, rank, suit)
                                    if(targetCard) {
                                        return <td className={colorStyles[tableColor]} key={rank + "_" + suit}>{targetCard.label}</td>
                                    }
                                    else {
                                        return <td key={rank + "_" + suit}></td>
                                    }
                                })
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    )

}