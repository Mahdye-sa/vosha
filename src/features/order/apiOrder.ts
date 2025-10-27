import type { OrderProps } from "../../interfaces/order";
import supabase from "../../services/supabase";

export async function createOrder(order: OrderProps) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select()
    .single();

  if (error) console.log(error.message);

  return data;
}

export async function getOrder(orderId: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (error) console.log(error.message);

  return data;
}
