// basic not found game page

import AppNavbar from "../components/AppNavbar.js";
import AppFooter from "../components/AppFooter.js";
import styles from "../pages css/mainPage.module.css";

const NotFound = ({ gameName }) => {
    console.log(gameName);
    return (
        <div className={styles.mainLayout}>
            <AppNavbar />
            <h1>{ `${gameName} was not found on our database :(`} </h1>
            <AppFooter />
        </div>
        
    )
}

export default NotFound;