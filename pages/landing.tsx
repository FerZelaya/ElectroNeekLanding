import { ReactElement } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import Home from "../components/Home/Home";
import {
  ApiLandingHeadingData,
  LandingHeadingData,
} from "../types/API-response.types";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout/Layout";

const API_ROUTE =
  "https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug=new-mainpage";
const API_ROUTE_ES =
  "https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug=homepage-studio-ide-2&lang=es";

interface LandingProps {
  headingData: LandingHeadingData;
}

const Landing: NextPageWithLayout<LandingProps> = ({ headingData }) => {
  return <Home data={headingData} />;
};

Landing.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx.locale;
  const route = locale === "en" ? API_ROUTE : API_ROUTE_ES;

  const response: [ApiLandingHeadingData] = await axios
    .get(route)
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
