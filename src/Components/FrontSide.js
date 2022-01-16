import classes from "./FrontSide.module.css";
import React from "react";
import Header from "./Layout/Header";
import { memo } from "react";
const FrontSide = (props) => {
  const clickHandler = () => {
    props.onClicked();
  };
  return (
    <div className={classes.flipfront} onClick={clickHandler}>
      <Header id={props.frontcontent.id} name={props.frontcontent.name} />
      <img src={props.frontcontent.imgSrc} alt="" className={classes.img} />
      <div className={classes.types}>
        <label className={classes.type1}>{props.frontcontent.type1}</label>
        {props.frontcontent.type2 != null && (
          <label className={classes.type2}>{props.frontcontent.type2}</label>
        )}
      </div>
    </div>
  );
};
export default memo(FrontSide);
