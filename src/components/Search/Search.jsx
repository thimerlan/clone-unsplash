import React from "react";
import "./Search.scss";
const Search = ({ targetQuery, query, setQuery, callQuery }) => {
  return (
    <header>
      <div className="search-bar">
        <div className="in-inp">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-inp"
            type="text"
            placeholder="Search Anything"
          />
          <span
            onClick={() => {
              setQuery("");
            }}
            className={query ? "" : "offTxt"}
          >
            &#10008;
          </span>
        </div>

        <button
          disabled={query.length ? false : true}
          onClick={callQuery}
          className="bn632-hover bn27"
        >
          Go!
        </button>
      </div>
    </header>
  );
};

export default Search;
