import { Stack } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import styles from "./css/mainPage.module.css";
import AppNavbar from "./components/AppNavbar";
import FilterMenu from "./components/FilterMenu";


export default function MainPage() {
    return (
        <div id="main" className={styles.mainPage}>
            <Stack gap={3}>
                <SearchBar />
                {/*Placeholder h1 element*/}
                <h1>Welcome</h1>
            </Stack>
            <FilterMenu />
        </div>
    );
}