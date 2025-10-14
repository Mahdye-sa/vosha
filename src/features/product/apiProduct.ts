import supabase from "../../services/supabase";

async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) console.log(error.message);

  return products;
}

export default getProducts;
