// basic not found game page

import AppNavbar from "../app/components/AppNavbar"
import AppFooter from "../app/components/AppFooter"
import styles from "./css/mainPage.module.css";

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