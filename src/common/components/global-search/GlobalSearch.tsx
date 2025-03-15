import { Button } from "../button/Button";
import styles from "./GlobalSearch.module.scss";

type Props = {
  extended?: boolean;
  onSubmit?: VoidFunction;
};

export const GlobalSearch = ({ extended, onSubmit }: Props) => {
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.();
        }}
      >
        <input className={styles.search} type="text" placeholder="Search ..." />

        {extended ? (
          <Button primary size="large" style={{ marginLeft: "10px" }}>
            Search
          </Button>
        ) : undefined}
      </form>
    </div>
  );
};
