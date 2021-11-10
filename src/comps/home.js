import react from "react";
import SideBar from "./Layout/SideBar";
import Content from "./Layout/Content";

function Home() {
    return(
        <div class="bg-black h-screen flex flex-nowrap"> 
            <SideBar></SideBar>
            <Content></Content>
        </div>
    )
}

export default Home