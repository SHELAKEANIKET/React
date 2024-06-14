const baseURL = "https://restcountries.com/v3.1/all";

export const fetchCountriesData = async () => {
  try {
    const res = await fetch(baseURL);
    return await res.json();
  } catch (error) {
    console.log("Something went wrong ..." + error);
  }
};
