import React, { useEffect, useState } from "react";
import { getBeers } from "../services/beerService";
import BeerCard from "./BeerCard";
import SearchBox from "./SearchBox";

const Dashboard = () => {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getBeers().then(res => {
      setBeers(res.data);
    });
  }, []);

  const placeholder = "Search...";
  const handleSearch = query => {
    setQuery(query);
  };

  const getPageData = () => {
    let filtered = beers;
    if (query.trim()) {
      filtered = beers.filter(beer =>
        beer.name.toLowerCase().startsWith(query.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <div className="container">
      <h1 className="center" style={{ marginTop: "10px" }}>
        Beer Factory
      </h1>
      <div className="search-bar">
        <SearchBox placeholder={placeholder} onChange={handleSearch} />
      </div>
      {beers.length === 0 && <p>Loading...</p>}
      {getPageData().length === 0 && beers.length > 0 && <h1>Not Found</h1>}
      <div>
        {getPageData().map(beer => (
          <li key={beer.id}>
            <BeerCard beer={beer} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
