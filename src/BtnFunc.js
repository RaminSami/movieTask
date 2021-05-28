import React, { useState } from "react";

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function BtnFunc({ originalTitle, posterPath }) {
  const [isLiked, setIsLiked] = useState();
  return (
    <div className="item">
      <img src={getImage(posterPath)} alt="" />
      <p>{originalTitle}</p>
      <p>
        <button
          style={isLiked ? { backgroundColor: "#4caf50" } : {}}
          onClick={() => setIsLiked(true)}
        >
          Like
        </button>
        <button
          style={isLiked === false ? { backgroundColor: "#ff0000" } : {}}
          onClick={() => setIsLiked(false)}
        >
          Dislike
        </button>
      </p>
    </div>
  );
}

export default BtnFunc;