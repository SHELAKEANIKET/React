import React from "react";
import { useWeather } from "../context/WeatherContextProvider";

function Card() {
  const { data } = useWeather();

  return (
    <div>
      {data ? (
        <div className="card">
          <img src={data?.current?.condition?.icon} />
          <h2>{data?.current?.temp_c} °C</h2>
          <h3>{data?.current?.condition?.text}</h3>
          <h4>
            {data?.location?.name}, {data?.location?.region}, {data?.location?.country}
          </h4>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
