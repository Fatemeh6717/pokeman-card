import classes from "./BackSide.module.css";
import Header from "./Layout/Header";
import ProgressBar from "./ProgressBar";
import { memo } from "react";
const BackSide = (props) => {
  
  const clickHandler = () => {
    props.onClicked();
  };
  return (
    <div className={classes.chart} onClick={clickHandler}>
    <Header id={props.backcontent.id} name={props.backcontent.name}/>
      {props.backcontent.stats.map((item, index) => {
        return (
          <ProgressBar value={item.basestat} key={index} label={item.name} num={index} />
        );
      })}
    </div>
  );
};
export default memo(BackSide);

