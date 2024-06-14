import React from "react";

function CountryCard({ name, flag, population, region, capital,area}) {
  return (  
    <div className="w-80 p-4 rounded hover:bg-slate-800 border-2 border-slate-600 flex justify-center items-center flex-col">
     <img className="w-60 h-60 mb-2" src={flag} alt="country flag" />
        <div className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-xl font-semibold text-center text-slate-100">
            {name}
          </h2>
          <p className="text-lg font-medium text-center text-slate-100">
            Population : {population.toLocaleString("en-IN")}
          </p>
          <p className="text-lg text-center text-slate-100">
            Region : {region}
          </p>
          <p className="text-lg text-center text-slate-100">
            Capital : {capital}
          </p>
          <p className="text-lg text-center text-slate-100">
            Area : {area} sq.km
          </p>
        </div>
    </div>
  );
}

export default CountryCard;
