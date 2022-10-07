import { GetServerSideProps } from "next";

const landing = () => {
  return <div>Electro Neek</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default landing;
