import React from "react";

import style from "./style.module.scss";

type NumberPickerProps = {
  decreaseDisabled?: boolean;
  increaseDisabled?: boolean;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export const NumberPicker: React.FC<NumberPickerProps> = ({
  decreaseDisabled,
  increaseDisabled,
  value,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className={style.container}>
      <span
        className={decreaseDisabled ? style.disabled : ""}
        onClick={!decreaseDisabled ? onDecrease : undefined}
      >
        -
      </span>
      <label>{value}</label>
      <span
        className={increaseDisabled ? style.disabled : ""}
        onClick={!increaseDisabled ? onIncrease : undefined}
      >
        +
      </span>
    </div>
  );
};

export default NumberPicker;
