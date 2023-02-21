import Image1 from "../../../assets/images/Image1.jpg";
import Image2 from "../../../assets/images/Image2.jpg";
import Image3 from "../../../assets/images/Image3.jpg";
import Image4 from "../../../assets/images/Image4.jpg";
import Image from "next/image";
import { Carousel } from "rs-3d-react-carousal";

// import Carousel from "react-spring-3d-carousel";

export default function HomeCs() {
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
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
