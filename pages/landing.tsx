import { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import Home from "../components/Home/Home";
import { LandingHeadingData } from "../types/API-response.types";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout/Layout";

const API_ROUTE =
  "https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug=new-mainpage";

interface LandingProps {
  headingData: LandingHeadingData;
}

const Landing: NextPageWithLayout<LandingProps> = ({ headingData }) => {
  const { asPath, locale, locales } = useRouter();

  return <Home data={headingData} />;
};

Landing.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

const removeTags = (str: string): string => {
  if (str === null || str === "") return "false";
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};

export default Landing;
