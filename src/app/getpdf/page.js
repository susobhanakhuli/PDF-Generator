"use client";
import Image from "next/image";
import { useState } from "react";
import style from "../style.module.css";
import urlpic from "../images/url-img.png";
import dowpic from "../images/down-logo.png";

export function GetPdf() {
  const [url, setUrl] = useState(null);

  const handleUrl = () => {
    console.log(url);
    fetch("http://localhost:8000/here", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.message);
        alert(data.message);
      })
      .catch((err) => console.log(err));

    // console.log(url);
  };

  return (
    <div>
      {/* Get PDF API */}
      <form>
        <div className={style.url}>
          <Image
            className={style.url_img}
            src={urlpic}
            width={500}
            height={500}
            alt="URL "
          />
          <input
            type="url"
            placeholder="Page URL"
            required
            className={style.url_box}
            onChange={(e) => {
              setUrl({ ...url, urls: e.target.value });
            }}
          />
        </div>
        <div className={style.dwn_button}>
          <button
            type="Download"
            className={style.submit_button}
            onClick={handleUrl}
          >
            <Image
              className={style.dow_img}
              src={dowpic}
              width={30}
              height={30}
              alt=""
            />
            Download
          </button>
        </div>
      </form>
    </div>
  );
}
