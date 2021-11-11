import React, { useState, Component } from "react";
import ShoeListComp from "./ShoeList";
import BrandComp from "../SortBrand"
import SetupStyles from "../../scss/setup.module.scss";
import Left from "../../scss/left.module.scss";
import Tag from "../../Icons/sortAZ.png";
import SortDown from "../../Icons/sortdown.png";
import SortUp from "../../Icons/sortup.png";
import ShoeData from "../../../shoedata/fgdata.json";
import SearchBar from "../Search.js";

// Const
const stringToNum = (s) => s * 1;
const stringToBool = (s) => (s === "True" ? 1 : 0);
const identity = (x) => x;
const compHighToLow =
  (key, f = identity) =>
  (m, n) => {
    if (f(n[key]) > f(m[key])) return 1;
    if (f(n[key]) < f(m[key])) return -1;
    return 0;
  };
const compLowToHigh =
  (key, f = identity) =>
  (n, m) => {
    if (f(n[key]) > f(m[key])) return 1;
    if (f(n[key]) < f(m[key])) return -1;
    return 0;
  };

  
class DataSorting extends Component {
  constructor(props) {
    super(props);
    this.SortByLowest = this.SortByLowest.bind(this);
    this.SortByHighest = this.SortByHighest.bind(this);
    this.SortByAz =  this.SortByAz.bind(this)
    this.ShuffleArray = this.ShuffleArray.bind(this)
    this.state = {
      ShoeList: [],
    };
  }

  ShuffleArray(){
    const { ShoeList } = this.state;
    let newShoeList = ShoeList;
    this.setState({ 
      ShoeList: newShoeList.sort((a, b) => (a, 'ShoeBrand').localCompare(b, 'ShoeBrand'))
    });
  }

  SortByLowest(event) {
    const { ShoeList } = this.state;
    let newShoeList = ShoeList;
    this.setState({
      ShoeList: newShoeList.sort(compLowToHigh("ShoePrice", stringToNum)),
    });
  }

  SortByHighest(event) {
    const { ShoeList } = this.state;
    let newShoeList = ShoeList;
    this.setState({
      ShoeList: newShoeList.sort(compHighToLow("ShoePrice", stringToNum)),
    });
  }

  SortByAz(event) {
    const { ShoeList } = this.state;
    let newShoeList = ShoeList;
    this.setState({
      ShoeList: newShoeList.sort(compLowToHigh("ShoeName")),
    });
  }


  componentDidMount() {
    this.ShuffleArray()
    this.setState({
      isCheapestFirst: true,
      ShoeList: ShoeData,
    });
  }

  componentWillUnmount() {
    this.ShuffleArray()
  }

  render() {
    // Handle Search Array Sorting
    const handleSearchStringChange = (sString) => {
      if (!sString) return this.setState({ShoeList: ShoeData})
      this.setState({
        ShoeList: ShoeData.filter(
          (x) => {
            console.log(this.ShoeList)
            return x.ShoeBrand.toLowerCase().includes(sString.toLowerCase()) || x.ShoeName.toLowerCase().includes(sString.toLowerCase())
            
          }
        ),
      });
    };
    // Handle Brand Array Sorting
    const handleBrandSortChange = (brand) => {
      if (!brand) return this.setState({ShoeList: ShoeData})
      this.setState({
        ShoeList: ShoeData.filter(
          (x) => {
            console.log(this.ShoeList)
            return x.ShoeBrand.toLocaleLowerCase.includes(brand.toLowerCase)
          }
        )
      })
    }

    return (
      <div className={SetupStyles.App}>
        <div className={SetupStyles.LayoutLeft}>

          <div className={Left.TopCard}>

            <SearchBar
              changeSearchString={handleSearchStringChange}
            ></SearchBar>

            <div className={Left.FilterCon}>
              <div onClick={this.SortByAz}>
                <img src={Tag}></img>
              </div>
              <div onClick={this.SortByLowest}>
                <img src={SortDown}></img>
              </div>
              <div onClick={this.SortByHighest}>
                <img src={SortUp}></img>
              </div>
            </div>
          </div>
          <BrandComp ChangeBrand={handleBrandSortChange} ></BrandComp>

        </div>

        <div className={SetupStyles.LayoutRight}>
          <ShoeListComp shoeData={this.state.ShoeList} />
        </div>
      </div>
    );
  }
}

export default DataSorting;
