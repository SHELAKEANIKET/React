import { createContext, useContext, useState } from "react";
import { fetchDataForCity } from "../api/api";

const weatherContext = createContext(null);

export const useWeather = () => {
  return useContext(weatherContext);
};

export const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");


    const fetchData = async () => {
      if (city !== "") {
        const response = await fetchDataForCity(city);
        setData(response);
      } else {
        alert("Please Enter Location");
      }
    };

    return (
      <weatherContext.Provider
        value={{
          data,
          city,
          setCity,
          fetchData,
        }}
      >
        {children}
      </weatherContext.Provider>
    );
  };

