import { GetServerSideProps } from "next";
import React from "react";

const Heading = (props: { heading: string }) => {
  return <div>{props.heading}</div>;
};

export default Heading;
