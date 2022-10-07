import { GetServerSideProps, NextPage } from "next";
import Home from "../components/Home/Home";

interface LandingProps {
  headingData: string;
}

const Landing: NextPage<LandingProps> = ({ headingData }) => (
  <Home data={headingData} />
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: { headingData: "YMCB" },
  };
};

export default Landing;
