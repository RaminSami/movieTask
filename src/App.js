import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const api_key = "d0f5f2e135336200362af8a1a73acb17";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w200/${path}`;

function App() {
  const [data, setData] = useState([]);
  const api = axios.create({ baseURL: BASE_URL });
  const getPopular = api.get("movie/popular", { params: { api_key } });
  
  useEffect(() => {
    getPopular.then((res) => {
      setData(res.data.results);
    });
  }, []);
  
  const clickHandle = ()=>{
    console.log('liked');
  }

  const clickHandleDislike = ()=>{
    console.log('disliked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          {data.map((movie) => (
            <div className="item">
              <img src={getImage(movie.poster_path)} />
              <p>{movie.original_title}</p>
              <p><button class="likebtn" onClick={clickHandle}>Like</button>
              <button class="dislikebtn"onClick={clickHandleDislike}>Dislike</button></p>
            
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
