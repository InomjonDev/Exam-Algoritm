import React from "react";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";
import SliderCarousel from "../../components/SliderCarousel/SliderCarousel";

function Home() {
  return (
    <div>
      <Slider />
      <SliderCarousel />
      <Products />
    </div>
  );
}

export default Home;
