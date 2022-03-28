import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEarListen,
  faIndianRupeeSign,
  faCircleDollarToSlot,
  faMessage,
  faLanguage,
  faWheelchairMove,
  faUserPlus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel autoPlay="true" infiniteLoop="true" style={{ height: "50%" }}>
        <div>
          <img src="/one.png" alt="image1" />
        </div>
        <div>
          <img src="/one.png" alt="image1" />
        </div>
        <div>
          <img src="/one.png" alt="image1" />
        </div>
        <div>
          <img src="/one.png" alt="image1" />
        </div>
        <div>
          <img src="/one.png" alt="image1" />
        </div>
        <div>
          <img src="/one.png" alt="image1" />
        </div>
      </Carousel>
      <div className="text-center">
        <h1>Features</h1>
        <div>
          Introduce the amazing range of ground-breaking features
          <br /> that your new release will include.
        </div>
        <div className="justify-items-center grid grid-cols-3 gap-3">
          <span>
            <FontAwesomeIcon
              icon={faMessage}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>Chatbot</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faEarListen}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>VoiceOver</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleDollarToSlot}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>Donation</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>Crowd Funding</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>Multi-Languages</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faWheelchairMove}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>Schemes And Opportunities</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faUserPlus}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>Authentication with UDID</div>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ fontSize: 40, color: "grey" }}
            />
            <div>OneStop Solution</div>
          </span>
        </div>
      </div>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
