import { GetServerSideProps } from "next";
import styles from "../../styles/Home.module.css";
import { LandingHeadingData } from "../../types/API-response.types";
import Heading from "./Heading";
import Posts from "./Posts";

interface HomeProps {
  data: LandingHeadingData;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className={styles.homeContainer}>
      <Heading heading={data} />
      <Posts />
    </div>
  );
};

export default Home;
