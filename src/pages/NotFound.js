// basic not found game page

import AppNavbar from "../app/components/AppNavbar"

const NotFound = ({ gameName }) => {
    console.log(gameName);
    return (
        <>
            <AppNavbar />
            <h1>{ `${gameName} was not found on our database :(`} </h1>
        </>
        
    )
}

export default NotFound;