import styles from "./Logo.module.scss";
import classNames from "classnames";

type Props = {
  size?: "small" | "default";
};

export const Logo = ({ size = "default" }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={classNames(styles.img, {
          [styles.small as string]: size === "small",
        })}
        src="/src/assets/star-wars-logo.png"
        alt="Star Wars Logo"
      />
    </div>
  );
};
