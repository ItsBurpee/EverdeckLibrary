import { Stack } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import FilterMenu from "./components/FilterMenu";
import styles from "./css/mainPage.module.css";
import Card from "./components/Card";
import GameAlertModal from "./components/GameAlertModal";


export default function MainPage() {
    return (
        <div id="main" className={styles.mainPage}>
            <Stack gap={3}>
                <SearchBar />
                <SearchFilters />
                {/*Placeholder h1 element*/}
                <h1>Welcome</h1>
                <Card title="Game Title" plyCount={[1,8]} time={[30,45]} complexity={[2.4]} />
            </Stack>
            <GameAlertModal />
            <FilterMenu />
        </div>
    );
}