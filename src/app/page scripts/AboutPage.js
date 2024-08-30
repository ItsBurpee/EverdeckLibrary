import Image from "next/image";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";
import styles from "../pages css/aboutPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alegreya_Sans, Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ['latin'], variable: "--font-alegreya"})
const alegreyaSans = Alegreya_Sans({ weight: '500', subsets: ['latin'], variable: "--font-alegreya-sans"})

const AboutPage = () => {
    return (
        <div className={`${styles.mainLayout} ${alegreya.variable} ${alegreyaSans.variable}`} >
            <AppNavbar/>
            <div className={styles.mainPage}>
                <h1>About The Everdeck</h1>
                <p>Designed by Wilhelm Su, the Everdeck is a card game system jam packed with card information patterns usable across various traditional and modern games. Each of the card components have been “designed with a ruthless combinatorial efficiency”; the extra glyphs aren’t half-heartedly placed on each card but rather carefully organized in relation to the rest of the 120 cards within the Everdeck resulting in an arrangement that’s “beautiful and practical”. If you want to learn about more of the Everdeck, you can check the links below:</p>
                <p><a href={"https://boardgamegeek.com/boardgame/291951/the-everdeck"} className={styles.links} >BoardGameGeek Page</a>&ensp;/&ensp;<a href={"https://thewrongtools.wordpress.com/2019/10/10/the-everdeck/"} className={styles.links}>Wordpress Design Page</a></p>
                <div>
                    <h1>About the App</h1>
                    <p>	
                        The Everdeck Library was developed as an alternative archiving option for the various games playable by the Everdeck. 
                        Most of the Everdeck’s game lists are available on online forums such as BGG and Reddit. 
                        The Everdeck Library takes the format of those game lists and expands upon them by providing in-depth information and interactivity from being able to filter out certain games to knowing how the Everdeck maps to the game’s cards and rules. 
                        Sifting through the Everdeck’s 120 cards for the game you’re playing is quite involved and forgetting a card or not knowing what a card does can heavily hinder gameplay experience. 
                        Tabletop games are a way to gather people around and the last thing you want is fumbling around with rules and setup.
                    </p>
                </div>
                <div className={styles.sourceDiv}>
                    <h1>Game Source List</h1>
                    <a href={"https://boardgamegeek.com/boardgame/291951/the-everdeck"} className={styles.links} >Reddit: Crowdsourcing Everdeck Instructions</a>
                    <br/>
                    <a href={"https://boardgamegeek.com/boardgame/291951/the-everdeck"} className={styles.links} >BGG: Everdeck Games Compilation</a>
                    <br/>
                    <p>BGG: The Everdeck Companion:&ensp;
                        <a href={"https://boardgamegeek.com/filepage/263177/the-everdeck-companion-vol-1"} className={styles.links} >Vol. 1</a>&ensp;
                        <a href={"https://boardgamegeek.com/filepage/279974/the-everdeck-companion-vol-2"} className={styles.links} >Vol. 2</a>&ensp;
                        <a href={"https://boardgamegeek.com/filepage/281080/the-everdeck-companion-vol-3"} className={styles.links} >Vol. 3</a>
                    </p>
                    <p>Nathan's Personal List of Everdeck Games</p>
                    <br/>
                    <a href={"https://boardgamegeek.com/"} target="_blank">
                    <Image
                        src={"/poweredByBGG.webp"}
                        alt="Powered by BGG"
                        height={75}
                        width={250}
                    />
                    </a>
                </div>
                <div>  
                    <h1>License Information</h1>
                    <p>MIT License</p>
                    <p>Copyright (c) 2024 Nathan Cruz, Carl Lyss, Philip Dometita</p>
                    <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:
                        <br/><br/>
                        The above copyright notice and this permission notice shall be included in all
                        copies or substantial portions of the Software.
                        <br/><br/>
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.
                    </p>
                </div>
            </div>
            <AppFooter />
        </div>
        
    )
}

export default AboutPage;