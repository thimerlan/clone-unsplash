import React, { useEffect, useState } from "react";

import "./App.scss";
import axios from "axios";
import Search from "./components/Search/Search";
import User_img from "./components/Us_img/User_img";
// https://api.unsplash.com/search/photos?=pages=&query=&client_id=J39C7nLsgnQNka7pJDJRr4ZHKe-RuMpuFxcfpURHn18
// https://unsplash.com/photos/rHfTdK9YU2Q/download?ixid=MnwzNzMxNjF8MHwxfHNlYXJjaHw3fHx0ZXNsYSUzRHxlbnwwfHx8fDE2NjYxODg4NzE&force=true
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [querX, setQuerx] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}=&client_id=J39C7nLsgnQNka7pJDJRr4ZHKe-RuMpuFxcfpURHn18&per_page=9`
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
    }, 100);
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
  //   console.log(data);
  //   console.log(query);
  //   console.log(querX);
  //   console.log(data);

  return (
    <div className="unsplash">
      <div className="content">
        <div className="container">
          <Search callQuery={callQuery} setQuery={setQuery} query={query} />
          <User_img
            page={page}
            NextPage={NextPage}
            prevPage={prevPage}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
