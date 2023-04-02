import Image1 from "../../../assets/images/Image1.jpg";
import Image2 from "../../../assets/images/Image2.jpg";
import Image3 from "../../../assets/images/Image3.jpg";
import Image4 from "../../../assets/images/Image4.jpg";
import Image from "next/image";
// import { Carousel } from "rs-3d-react-carousal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import Carousel from "react-spring-3d-carousel";

export default function HomeCs() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image1}
            alt="First slide"
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
            height={600}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
