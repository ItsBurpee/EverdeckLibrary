import styles from "../css/mappingTable.module.css";
import { Table } from "react-bootstrap";
import Image from "next/image";
//The generic table which will have information passed into it

//TODO: It is currently causing a hydration error
//Needs to actually take in paramaters and use them to fill table

export default function MappingTable(
    tableSuit
) {

    console.log(Object.values(tableSuit)[0])

    const cardSuits = [
        {
            club: "/everdeckSuits/everdeck-suits-club.svg", 
            spade: "/everdeckSuits/everdeck-suits-spade.svg"
        },
        {
            heart: "/everdeckSuits/everdeck-suits-heart.svg", 
            diamond: "/everdeckSuits/everdeck-suits-diamond.svg"
        },
        {
            coin: "/everdeckSuits/everdeck-suits-coin.svg", 
            crown: "/everdeckSuits/everdeck-suits-crown.svg"
        },
        {
            moon: "/everdeckSuits/everdeck-suits-moon.svg", 
            star: "/everdeckSuits/everdeck-suits-star.svg"
        }
    ]

    const targetSuit = Object.entries(cardSuits[Object.values(tableSuit)[0]]);

    const cardRanks = ["0","1","2","3","4","5","6","7","8","9","X","J","Q","A"];

    return (
        <div>
            <Table className={styles.table}>
            <thead>
            <tr>
                <th></th>
                {targetSuit.map((suit) => (
                    <th><Image src={suit[1]} height={40} width={40} alt={suit[0]} /></th>
                ))}
            </tr>
            </thead>
            <tbody>
                {cardRanks.map((rank) => (
                    <tr>
                        <td><strong>{rank}</strong></td>
                        <td>{rank}.1</td>
                        <td>{rank}.2</td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </div>
    )

}