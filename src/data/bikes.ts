import { Bike } from "@/types";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL as string,
  process.env.NEXT_APP_PUBLIC_SUPABASE_KEY as string
);

const getBikes = async () => {
  let { data: bikes, error } = await supabase.from("bikes").select("*");
  if (error) {
    return [];
  }
  return bikes as Bike[];
};

export default getBikes;
