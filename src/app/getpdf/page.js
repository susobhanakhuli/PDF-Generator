"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import style from "../style.module.css";
import urlpic from "../images/url-img.png";
import dowpic from "../images/down-logo.png";

export default function GetPdf() {
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [url, setUrl] = useState(null);

  const handleUrl = (e) => {
    e.preventDefault();
    console.log(url);
    console.log(backend_url);
    axios({
      url: `${backend_url}/download`,
      method: "GET",
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${url}`,
      },
    })
      .then((res) => {
        fileDownload(res.data, "WebToPdf.pdf");
      })
      .catch((err) => console.log(err));

    // fetch("http://localhost:8000/download", {
    //   // fetch(`${backend_url}/here`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `${url}`,
    //   },
    // })
    //   // fetch("http://localhost:8000/here", {
    //   //   // fetch(`${backend_url}/here`, {
    //   //   method: "POST",
    //   //   headers: {
    //   //     "Content-Type": "application/json",
    //   //   },
    //   //   body: JSON.stringify(url),
    //   // })
    //   .then((res) => fileDownload(res.formData, "WebToPdf.pdf"))
    //   // .then((res) => res.json())
    //   // .then((data) => {
    //   //   // console.log(data.message);
    //   //   // alert(data.message);
    //   //   // console.log(data.pdf);

    //   //   // const blob = new Blob([data.pdf], { type: "application/pdf" });
    //   //   // const url = window.URL.createObjectURL(blob);
    //   //   window.open(data);
    //   //   // window.open(data.pdf, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
    //   //   // data.download(data.pdf);
    //   // })
    //   .catch((err) => console.log(err));

    // // console.log(url);
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
              setUrl(e.target.value);
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
