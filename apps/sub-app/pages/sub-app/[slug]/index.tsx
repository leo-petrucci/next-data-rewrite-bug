import { Inter } from "next/font/google";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Slug() {
  return <>Content</>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      title: "test",
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
