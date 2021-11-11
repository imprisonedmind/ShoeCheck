import react from "react";
import ShoeData from '../shoedata/fgdata.json'

export const  ShoeCard = () => {
    return(
     <div class="flex flex-wrap justify-evenly h-full w-full text-white">
         {ShoeData.map((data,key) => {
             return(
                <div key={key} class="flex flex-wrap justify-center bg-gray-800 h-1/3 w-60 mx-1 my-5 py-2 rounded-3xl overflow-hidden">
                    <img srcset={data.ShoeImg} class="bg-gray-100 h-4/6 w-11/12 object-cover rounded-3xl"></img>
                    <h1 class="w-full text-center">{data.ShoeBrand}</h1>
                    <p>{data.ShoeName}</p>
                    <p class="w-full text-center">R {data.ShoePrice}</p>
                </div>       
             );
         })}
     </div>   
    )
}

export default ShoeCard