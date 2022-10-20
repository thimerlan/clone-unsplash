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
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?=per_page${3}=&query=${query}=&client_id=J39C7nLsgnQNka7pJDJRr4ZHKe-RuMpuFxcfpURHn18`
        );
        setData(response.data.results);
      } catch (error) {
        console.warn(Error(error));
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
  console.log(data);
  console.log(query);
  console.log(querX);
  //   console.log(data);

  return (
    <div className="unsplash">
      <div className="content">
        <div className="container">
          <Search callQuery={callQuery} setQuery={setQuery} query={query} />
          <User_img data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
