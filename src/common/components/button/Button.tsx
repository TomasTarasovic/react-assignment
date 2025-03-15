import classNames from "classnames";
import styles from "./Button.module.scss";
import { CSSProperties } from "react";

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
};

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  children,
  style,
}: ButtonProps) => {
  const mode = primary ? "primary" : "secondary";

  return (
    <button
      type="button"
      className={classNames(styles.storybookButton, styles[size], styles[mode])}
      style={{ backgroundColor, ...style }}
    >
      {children}
    </button>
  );
};
