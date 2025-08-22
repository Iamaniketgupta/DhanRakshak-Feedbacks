import HomePage from "./home/pages/HomePage";
import { getAllFeedbacks } from "./home/queries/home";
export default async function Home() {
  const data = await getAllFeedbacks();
  if (!data) <div>A sever error occured</div>;
  return <HomePage data={data?.feedbacks} />;
}
