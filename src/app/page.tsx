import { BikeList } from "@/components/bike-list";
import bikes from "@/data/bikes";

export default function Home() {
  return <BikeList bikes={bikes} />;
}
