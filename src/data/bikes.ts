import { Bike } from "@/types";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL as string,
  process.env.NEXT_APP_PUBLIC_SUPABASE_KEY as string
);

const bikes: Bike[] = [
  {
    name: "Electric Bike",
    type: "electric",
    image:
      "https://res.cloudinary.com/dbravos/image/upload/v1675660530/bike-rental/e-bike_kswvlg.jpg",
    slug: "/e-bike",
  },
  {
    name: "Traditional Bike",
    type: "normal",
    image:
      "https://res.cloudinary.com/dbravos/image/upload/v1675660531/bike-rental/bike_bpgozl.jpg",
    slug: "/bike",
  },
  {
    name: "Vintage Bike",
    type: "old",
    image:
      "https://res.cloudinary.com/dbravos/image/upload/v1675660531/bike-rental/vintage_wmhcy7.jpg",
    slug: "/v-bike",
  },
];

const getBikes = async () => {
  let { data: bikes, error } = await supabase.from("bikes").select("*");
  if (error) {
    return [];
  }
  return bikes as Bike[];
};

export default getBikes;
