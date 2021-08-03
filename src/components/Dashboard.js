import React, { useEffect, useState } from "react";
import { getBeers } from "../services/beerService";
import BeerCard from "./BeerCard";

const Dashboard = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    getBeers().then(res => {
      setBeers(res.data);
      console.log("get beers", res.data);
    });
  }, []);

  return (
    <div>
        <h2 className="center">Beer Factory</h2>
      <div>
        {beers.map(beer => (
          <li key={beer.id}>
            <BeerCard beer={beer} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
