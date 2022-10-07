import { GetServerSideProps } from "next";
import styles from "../../styles/Home.module.css";
import Heading from "./Heading";

interface HomeProps {
  data: string;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Heading heading={data} />
    </div>
  );
};

export default Home;
