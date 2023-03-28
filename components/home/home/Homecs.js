import Image1 from "../../../assets/images/Image1.jpg";
import Image2 from "../../../assets/images/Image2.jpg";
import Image3 from "../../../assets/images/Image3.jpg";
import Image4 from "../../../assets/images/Image4.jpg";
import Image from "next/image";
import { Carousel } from "rs-3d-react-carousal";

// import Carousel from "react-spring-3d-carousel";

export default function HomeCs() {
  let slides = [
    <img src="https://unsplash.com/photos/O7ke8N4kTpQ" alt="1" />,
    <img src="https://unsplash.com/photos/SBIak0pKUIE" alt="2" />,
    <img src="https://unsplash.com/photos/COmEXrbCtf4" alt="3" />,
    <img src="https://unsplash.com/photos/9jSr5CZsr6k" alt="4" />,
    <img src="https://unsplash.com/photos/ac_GAb-SBes" alt="5" />,
  ];

  return (
    <>
      {/* <Carousel slides={slides} /> */}
      <Carousel
        slides={slides}
        autoplay={true}
        interval={5000}
        // onSlideChange={callback}
      />
    </>
  );
}
