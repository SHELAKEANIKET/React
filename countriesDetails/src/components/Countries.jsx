import React, { useEffect, useState } from "react";
import { fetchCountriesData } from "../../countriesData";
import CountryCard from "./CountryCard";
import Navbar from "./Navbar";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountriesData();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center flex-col gap-4 py-10 px-4">
      <Navbar setSearchCountry={setSearchCountry} handleSearch={handleSearch} />
      <div className="flex justify-center items-center flex-wrap gap-5 my-5 py-10 px-4">
        {countries &&
          filteredCountries.map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              area={country.area}
            />
          ))}
      </div>
    </div>
  );
}

export default Countries;
