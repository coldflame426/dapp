import React from "react";
import cx from "classnames";

import style from "./style.module.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  appearance?: "default" | "round";
  color?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  color,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={cx(style.button, {
        [style.disabled]: disabled,
        [style.round]: appearance === "round",
        [style.secondary]: color === "secondary",
      })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  appearance: "default",
  color: "primary",
  type: "button",
};

export default Button;
