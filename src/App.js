import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BtnFunc from "./BtnFunc";

const api_key = "d0f5f2e135336200362af8a1a73acb17";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [data, setData] = useState([]);
  const api = axios.create({ baseURL: BASE_URL });
  const getPopular = api.get("movie/popular", { params: { api_key } });
  
  useEffect(() => {
    getPopular.then((res) => {
      setData(res.data.results);
    });
  }, []);
  


  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          {data.map((movie) => (
             <BtnFunc
             originalTitle={movie.original_title}
             posterPath={movie.poster_path}
           />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
