import AppNavbar from "../components/AppNavbar.js";
import AppFooter from "../components/AppFooter.js";
import styles from "../pages css/mainPage.module.css";

const NotFound = ({ gameName }) => {
    return (
        <div className={styles.mainLayout}>
            <AppNavbar />
            <h1> The rules for <b>{gameName}</b> have not been set up on our database :(</h1>
            <AppFooter />
        </div>
        
    )
}

export default NotFound;