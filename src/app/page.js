import { Stack } from "react-bootstrap";
import SearchBar from "./components/SearchBar";

export default function MainPage() {
    return (
        <div id="main">
            <Stack gap={3}>
                <SearchBar />
                {/*Placeholder h1 element*/}
                <h1>Welcome</h1>
            </Stack>
        </div>
    );
}