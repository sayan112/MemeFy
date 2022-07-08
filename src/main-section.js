import React, { useState } from "react";
import datas from "./Memesdata/data.js";

const Mainsecion = () => {
  const [memeimg, setmemeimg] = useState("");

  function memesurlgenerate() {
    const memesdata = datas.data.memes;
    const randomnumber = Math.floor(Math.random() * memesdata.length);
    console.log(randomnumber);
    const url = memesdata[randomnumber].url;
    setmemeimg(url) ;
    console.log(url);
  }

  return (
    <>
      <main>
        <div className="form">
          <div className="flex-imput">
            <input
              type="text"
              placeholder="Top-text"
              className="form--input-1"
            />
            <input
              type="text"
              placeholder="Buttom-text"
              className="form--input-2"
            />
          </div>

          <div className="new-img-button">
            <button className="form-button" onClick={memesurlgenerate}>
              Get a new image 🖼️
            </button>
          </div>
          <div className="img">
            <img src={memeimg} className="meme-img" />
          </div>
        </div>
      </main>
    </>
  );
};
export default Mainsecion;
