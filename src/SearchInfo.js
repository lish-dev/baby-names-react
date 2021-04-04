import React from "react";
import SearchBar from "./SearchBar.js";

const SearchInfo = (props) => {
  const { BabyNameIndex } = props;
  BabyNameIndex.sort(function (a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB)
      //sort string ascending
      return -1;
    if (nameA > nameB) return 1;
    return 0; //default return value (no sorting)
  });
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Names</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="babyName">Baby name</label>
            <div className="search-row">
              <input
                type="text"
                id="babyName"
                className="form-control"
                placeholder="Baby name"
              />
              <SearchBar />
            </div>
          </form>
          {BabyNameIndex.map((baby) => (
            <h3 key={baby.id}>{baby.name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchInfo;
