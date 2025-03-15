import { GlobalSearch } from "../global-search/GlobalSearch";
import { Logo } from "../logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
    </header>
  );
};
