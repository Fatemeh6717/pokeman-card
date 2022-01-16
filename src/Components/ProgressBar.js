import classes from "./ProgressBar.module.css";
import { memo } from "react";
const ChartsBar = (props) => {
  let barFillWidth = "0%";
  let barColors = [
    "#CE416B",
    "#FF9D55",
    "#F4D23C",
    "#8FA9DE",
    "#63BC5A",
    "#EC8FE6",
  ];
  if (props.value > 0) {
    barFillWidth = Math.round((props.value * 100) / 255) + "%";
  }

  return (
    <div className={classes["progress-bar"]}>
      <div
        className={classes["progress-bar__label"]}
        style={{ color: barColors[props.num] }}
      >
        {props.label}
      </div>
      <div className={classes["progress-bar__content"]}>
        <div className={classes["progress-bar__inner"]}>
          <div
            className={classes["progress-bar__fill"]}
            style={{
              width: barFillWidth,
              backgroundColor: barColors[props.num],
            }}
          ></div>
        </div>
        <div
          className={classes["progress-bar__value"]}
          style={{ color: barColors[props.num] }}
        >
          {props.value}
        </div>
      </div>
    </div>
  );
};
export default memo(ChartsBar);
//
