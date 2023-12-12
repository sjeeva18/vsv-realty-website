import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Lands.css";
import { PuffLoader } from "react-spinners";
import useLands from "../../hooks/useLands";
import LandCard from "../../components/LandCard/LandCard";
const Lands = () => {
  const { data, isError, isLoading } = useLands();
  const [filter, setFilter] = useState("");

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth lands-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings innerWidth flexCenter lands">
          {
            // data.map((card, i) => (<PropertyCard card={card} key={i} />))

            data
              .filter(
                (land) =>
                  land.title.toLowerCase().includes(filter.toLowerCase()) ||
                  land.address.toLowerCase().includes(filter.toLowerCase()) ||
                  land.city.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <LandCard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Lands;
