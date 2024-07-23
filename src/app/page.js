import { Stack } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import styles from "./css/mainPage.module.css";

export default function MainPage() {
    return (
        <div id="main" className={styles.mainPage}>
            <Stack gap={3}>
                <SearchBar />
                {/*Placeholder h1 element*/}
                <h1>Welcome</h1>
            </Stack>
        </div>
    );
}