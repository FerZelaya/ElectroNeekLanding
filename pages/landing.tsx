import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import Home from "../components/Home/Home";
import { LandingHeadingData, AxiosResponse } from "../types/API-response.types";

const API_ROUTE =
  "https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug=new-mainpage";

interface LandingProps {
  headingData: LandingHeadingData;
}

const Landing: NextPage<LandingProps> = ({ headingData }) => (
  <Home data={headingData} />
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response: [LandingHeadingData] = await axios
    .get(API_ROUTE)
    .then((response) => response.data);
  const { yoast_head_json, excerpt } = response[0];
  const excerptNoTags = removeTags(excerpt.rendered);

  const formattedData = {
    yoast_head_json,
    excerptNoTags,
  };

  return {
    props: { headingData: formattedData },
  };
};

const removeTags = (str: string): string => {
  if (str === null || str === "") return "false";
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};

export default Landing;
