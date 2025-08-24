import HomePage from "./home/pages/HomePage";
import { getAllFeedbacks } from "./home/queries/home";

export default async function Home() {
  const data = await getAllFeedbacks();

  console.log(data)

  if (!data) {
    return <div>A server error occurred</div>;
  }

  return <HomePage data={data?.feedbacks} />;
}
