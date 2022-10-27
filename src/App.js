import React, { useEffect, useState } from "react";

import "./App.scss";
import axios from "axios";
import Search from "./components/Search/Search";
import User_img from "./components/Us_img/UserImg";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [querX, setQuerx] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [perPage, setPerPage] = useState(9);
  const [orderBy, setOrderBy] = useState(true);
  const [ort, setOrt] = useState("landscape");
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}=&client_id=J39C7nLsgnQNka7pJDJRr4ZHKe-RuMpuFxcfpURHn18&per_page=${perPage}&order_by=${
            orderBy ? "relevant" : "latest"
          }&orientation=${ort}`
        );
        setData(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(Error(error));
      }
    }
    if (querX) {
      FetchData();
    }
  }, [querX]);
  const callQuery = () => {
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 1000);
  };

  function NextPage() {
    setPage((prev) => prev + 1);
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 50);
    if (totalPages === page) {
      setPage(totalPages);
    } else {
    }
  }
  function prevPage() {
    setPage((prev) => prev - 1);
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 100);
    if (page <= 1) {
      setPage(1);
    } else {
    }
  }
  function PerPage() {
    setPerPage((prev) => prev + 3);
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 100);
  }
  function lessPage() {
    setPerPage((prev) => prev - 3);
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 100);
  }
  function orderByLatest() {
    orderBy ? setOrderBy(false) : setOrderBy(true);
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 100);
  }
  function ortFilter(e) {
    setOrt(e.target.value);
    setQuerx(true);
    setTimeout(() => {
      setQuerx(false);
    }, 100);
  }
  //   console.log(data);
  //   console.log(query);
  //   console.log(querX);
  //   console.log(data);
  console.log(ort);
  return (
    <div className="unsplash">
      <div className="content">
        <div className="container">
          <Search callQuery={callQuery} setQuery={setQuery} query={query} />
          <User_img
            page={page}
            NextPage={NextPage}
            prevPage={prevPage}
            PerPage={PerPage}
            totalPages={totalPages}
            lessPage={lessPage}
            data={data}
            perPage={perPage}
            orderBy={orderBy}
            ortFilter={ortFilter}
            orderByLatest={orderByLatest}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
