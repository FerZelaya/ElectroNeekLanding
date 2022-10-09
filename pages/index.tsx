import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.landingPush}
        onClick={() => router.push("landing")}
      >
        Go to ElectroNeek Landing Test
      </button>
    </div>
  );
};

export default Home;
