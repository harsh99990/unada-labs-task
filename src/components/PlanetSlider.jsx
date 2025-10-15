import { useState } from "react";
import etheron from "../assets/images/etheron.png";
import lumenara from "../assets/images/lumenara.png";
import theronix from "../assets/images/theronix.png";
import orionis from "../assets/images/orionis.png";

const planets = [
  {
    name: "Etheron",
    img: etheron,
  },
  {
    name: "Lumenara",
    img: lumenara,
  },
  {
    name: "Theronix",
    img: theronix,
  },
  {
    name: "Orionis",
    img: orionis,
  },
];

const PlanetSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="first_slide">
      <h1>ETHERON</h1>
      <div className="ft_grid">
        <div className="grid-item">
          <span>GALAXY</span>
          <h2>Andromeda-IV</h2>
        </div>
        <div className="grid-item">
          <span>Diameter</span>
          <h2>16,400 km</h2>
        </div>
        <div className="grid-item">
          <span>GALAXY</span>
          <h2>26 Earth hours</h2>
        </div>
        <div className="grid-item">
          <span>Avg Temperature</span>
          <h2>-20°C to 0°C</h2>
        </div>
        <div className="grid-item">
          <span>Climate</span>
          <h2>Polar</h2>
        </div>
      </div>
    </div>
  );
};

export default PlanetSlider;
