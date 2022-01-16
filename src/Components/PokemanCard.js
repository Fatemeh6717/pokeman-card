import classes from "./PokemanCard.module.css";
import BackSide from "./BackSide";
import FrontSide from "./FrontSide";

import { useState } from "react";
const PokemanCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={classes.card}>
      <div className={`${classes.cardInner} ${isClicked && classes.clicked}`}>
        <FrontSide
          frontcontent={props.cardInfo}
          onClicked={() => {
            setIsClicked((preState) => !preState);
          }}
        />
        <BackSide
          backcontent={props.cardInfo}
          onClicked={() => {
            setIsClicked((preState) => !preState);
          }}
        />
      </div>
    </div>
  );
};
export default PokemanCard;
