import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Same green juice crucifix photo booth, keffiyeh banh mi
            intelligentsia mustache cray letterpress gentrify. Shaman ugh craft
            beer, thundercats pickled vice asymmetrical polaroid everyday carry
            succulents YOLO. Mumblecore literally viral, edison bulb tofu
            cold-pressed four dollar toast church-key ethical pinterest narwhal.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
