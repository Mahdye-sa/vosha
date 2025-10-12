import supabase from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) console.log(error.message);

  const productsWithUrl = products?.map((p) => ({
    ...p,
    img: supabase.storage.from("products").getPublicUrl(p.img).data.publicUrl,
  }));

  return productsWithUrl;
}

export default getProducts;
