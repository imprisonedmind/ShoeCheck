import React, { Component } from "react";
import Styles from "../../scss/shoes.module.scss";

class ShoeDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      const {card,Logo,Sex,SexLogo} = this.props
    return (
            <a rel="noreferrer" target="_blank" className={Styles.cardCon} href={card.ShoeLink}>
              <div  className={Styles.CardImg}>
                <img className={Styles.Logo} src={Logo}></img>
                <div className={Sex} > 
                <img src={SexLogo}></img>
                </div>

                <div className={Styles.imgCon}>
                    <img srcSet={card.ShoeImg}></img>
                </div>
                
              </div>
  
              <div className={Styles.CardDesc}>
                <h1>{card.ShoeBrand}</h1>
                <p>{card.ShoeName}</p>
                <p><span>R{card.ShoePrice}</span></p>
              </div>
            </a>
      )
    }
  }


export default ShoeDetail;
