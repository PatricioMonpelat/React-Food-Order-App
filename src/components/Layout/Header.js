import React, { Fragment } from "react";
import mealsImage from "../../assets/1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import arg from '../../assets/arg.png';

const Header = (props) => {
  return (
    <Fragment>
    
      <header className={classes.header}>
        <h1>HomeLand Food </h1>
        <img src={arg} alt='argentina food' className={classes.arg}/>
        <HeaderCartButton onClick={props.onshowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
