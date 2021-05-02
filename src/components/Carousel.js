import React from 'react'
import car1 from "../images/carousel1.jpg"
import car2 from "../images/carousel2.jpg"
import car3 from "../images/carousel3.jpg"
import car4 from "../images/carousel4.jpg"
import car5 from "../images/carousel5.jpg"

import car8 from "../images/carousel8.jpg"
import car9 from "../images/carousel9.jpg"
import car10 from "../images/carousel10.jpg"
import car11 from "../images/carousel11.jpg"
import car12 from "../images/carousel12.jpg"
import car14 from "../images/carousel14.jpg"

import { Carousel } from "react-responsive-carousel";



const IndexCarousel = () => (
    <Carousel width="80%" centerMode useKeyboardArrows>
      <div>
        <img alt="" src={car1} />
        <p className="legend">Day 1 on the Weber</p>
      </div>
      <div>
        <img alt="" src={car2} />
        <p className="legend">First shot at some wings</p>
      </div>
      <div>
        <img alt="" src={car3} />
        <p className="legend">First Weber racks of ribs!</p>
      </div>
      <div> 
        <img alt="" src={car4} />
        <p className="legend">Great cut on those ribs</p>
      </div>
      <div>
        <img alt="" src={car5} />
        <p className="legend">Elotes, Potatoes and Chicken with White Sauce</p>
      </div>
      <div>
        <img alt="" src={car8} />
        <p className="legend">Ribs on the Pit Barrel</p>
      </div>
      <div>
        <img alt="" src={car9} />
        <p className="legend">Smoked Jerk Chicken </p>
      </div>
      <div>
        <img alt="" src={car10} />
        <p className="legend">Beautiful Brisket</p>
      </div>
      <div>
        <img alt="" src={car11} />
        <p className="legend">Brisket n Beef Rib</p>
      </div>
      <div>
        <img alt="" src={car12} />
        <p className="legend">Snow Day Ribs</p>
      </div>
      <div>
        <img alt="" src={car14} />
        <p className="legend">Ribs, Chicken, and Corn</p>
      </div>
    </Carousel>
);

export default IndexCarousel;