import { BikeList } from "@/components/bike-list";
import getBikes from "@/data/bikes";

export default async function Home() {
  const bikes = await getBikes();

  return <BikeList bikes={bikes} />;
}
