import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Residencies.css";
import useResidencies from "../../hooks/useResidencies";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
const Residencies = () => {
  const { data, isError, isLoading } = useResidencies();
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
      <div className="flexColCenter paddings innerWidth residencies-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings innerWidth flexCenter residencies">
          {
            // data.map((card, i) => (<PropertyCard card={card} key={i} />))

            data
              .filter(
                (residency) =>
                  residency.title
                    .toLowerCase()
                    .includes(filter.toLowerCase()) ||
                  residency.address
                    .toLowerCase()
                    .includes(filter.toLowerCase()) ||
                  residency.city.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <PropertyCard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Residencies;
