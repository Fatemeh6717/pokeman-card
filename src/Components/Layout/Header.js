import classes from "./Header.module.css";
import React from "react";
import { memo } from "react";
const Header = (props) => {

  return (
    <div className={classes.header}>
      <label className={classes.num}>#{props.id}</label>
      <label className={classes.name}>{props.name}</label>
    </div>
  );
};
export default memo(Header);
