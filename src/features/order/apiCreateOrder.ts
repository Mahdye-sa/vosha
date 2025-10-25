import type { OrderProps } from "../../interfaces/order";
import supabase from "../../services/supabase";

async function createOrder({ order }: OrderProps) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select();

  if (error) console.log(error.message);

  return data;
}

export default createOrder;
