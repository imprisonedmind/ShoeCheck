import React, {useState}  from "react"
import SetupStyles from '../scss/setup.module.scss'
import Left from '../scss/left.module.scss'
import adidas from '../Icons/adidas.png'
import ShoeData from '../shoedata/fgdata.json'

function Brand({HandleBrandSort}) {
  
    function HandleBrandSort(brand){
            if (ShoeData.ShoeBrand.includes('adidas')) {
                brand = 'adidas'
            }else return
        
    }

    return(
        <div className={Left.SBrand}>
        <div>
          <img onClick={HandleBrandSort} src={adidas}></img>
        </div>
      </div>
    )

}

export default Brand