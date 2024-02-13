const baseURL = "https://api.weatherapi.com/v1/current.json?key=6cc3800a8c8d481a98f62112242801";

export const fetchDataForCity = async (city) =>{
    const res = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await res.json();  
}
