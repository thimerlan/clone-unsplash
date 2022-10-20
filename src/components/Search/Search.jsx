import React from "react";
import "./Search.scss";
const Search = ({ targetQuery, query, setQuery, callQuery }) => {
  return (
    <header>
      <div className="search-bar">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-inp"
          type="text"
          placeholder="Search Anything"
        />

        <button onClick={callQuery} class="bn632-hover bn27">
          Button
        </button>
      </div>
    </header>
  );
};

export default Search;
