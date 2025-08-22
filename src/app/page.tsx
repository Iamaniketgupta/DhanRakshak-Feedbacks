import HomePage from "./home/pages/HomePage";
import { getAllFeedbacks } from "./home/queries/home";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | Dhank Rakshak",
    description: "See feedbacks and reviews from our users.",
  };
};

export default async function Home() {
  const data = await getAllFeedbacks();

  if (!data) {
    return <div>A server error occurred</div>;
  }

  return <HomePage data={data?.feedbacks} />;
}
