"use client";
import Image from "next/image";
import { useState } from "react";
import style from "../style.module.css";
import urlpic from "../images/url-img.png";
import dowpic from "../images/down-logo.png";

export default function GetPdf() {
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [urls, setUrls] = useState({urls: ""});

  const handleUrl = (e) => {
    e.preventDefault();
    console.log(urls);
    console.log(backend_url);
    // fetch(`${backend_url}/here` || "http://localhost:8000/here", {
      fetch(`${backend_url}/here`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urls),
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
              setUrls({ urls: e.target.value });
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
