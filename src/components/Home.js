import { useContext, useEffect } from "react";
import HeadingContext from "./HeadingContext";
import styles from "./home.module.css";

function Home() {
  const { setHeading1 } = useContext(HeadingContext);

  useEffect(() => {
    setHeading1("Trang đầu tiên sử dụng useContext");
  }, [setHeading1]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles["ttl-main"]}>This is the Home.js</h1>
    </div>
  );
}

export default Home;
