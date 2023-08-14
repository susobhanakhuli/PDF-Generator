import Image from "next/image";
// import page from "./page.module.css";
import style from "./style.module.css";
import webpic from "./images/web.gif";
import pdfpic from "./images/pdf.gif";
import arrowpic from "./images/arrow.gif";
import linkpic from "./images/linkdin.gif";
import gitpic from "./images/github.gif";

import GetPdf from "./getpdf/page";

export default function Home() {
  return (
    <main className={style.all}>
      <div>
        <div className={style.middle_position}>
          {/* Image at the Top Starts*/}
          <div className={style.hero_image}>
            <Image
              className={style.img}
              src={webpic}
              width={500}
              height={500}
              alt="GIF Image"
            />
            <Image
              className={style.img}
              src={arrowpic}
              width={500}
              height={500}
              alt="GIF Image"
            />
            <Image
              className={style.img}
              src={pdfpic}
              width={500}
              height={500}
              alt="GIF Image"
            />
          </div>
          {/* Image at the Top Ends*/}

          {/* The text at the middle starts*/}
          <div className={style.hero_text}>
            <h3>Website To PDF</h3>
            <p>Paste the link of the website</p>
          </div>
          {/* The text at the middle ends*/}

          {/* The input of Page url with download button strats */}
          <div className={style.hero_form}>
            <GetPdf />
          </div>
          {/* The input of Page url with download button ends */}

          {/* The Social Profiles of the Creater starts*/}
          <div className={style.hero_social}>
            {/* Anchor Tag at images */}
            <a href="https://www.linkedin.com/in/susobhanakhuli">
              <Image
                className={style.img}
                src={linkpic}
                width={500}
                height={500}
                alt="GIF Image"
              />
            </a>
            <a href="https://github.com/susobhanakhuli">
              <Image
                className={style.img}
                src={gitpic}
                width={500}
                height={500}
                alt="GIF Image"
              />
            </a>
          </div>
          {/* The Social Profiles of the Creater Ends*/}
        </div>
      </div>
    </main>
  );
}
