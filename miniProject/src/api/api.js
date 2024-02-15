export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  } catch (error) {
    console.log("Something Went Wrong..",error);
  }
};
