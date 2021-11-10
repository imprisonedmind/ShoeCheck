import react from "react";

function SideBar() {
    return(
        // Side Bar Components
        <div class="bg-gray-900 flex flex-wrap justify-evenly h-full w-1/3 min-w-xs max-w-xs p-5 ">
            {/* Top Box */}
            <div class="bg-gray-800 h-1/5 w-full rounded-2xl p-5">
                <input type="search" name='Search' class="bg-gray-700 w-full h-10 rounded-full pl-5"></input>
            </div>
            {/* middle box */}
            <div class="bg-gray-800 h-3/4 w-full rounded-2xl">

            </div>
        </div>
    )
}

export default SideBar