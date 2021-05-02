import React from 'react'
import car1 from "../images/carousel1.JPG"
import car2 from "../images/carousel2.JPG"
import car3 from "../images/carousel3.JPG"
import car4 from "../images/carousel4.JPG"
import car5 from "../images/carousel5.JPG"

import car8 from "../images/carousel8.JPG"
import car9 from "../images/carousel9.JPG"
import car10 from "../images/carousel10.JPG"
import car11 from "../images/carousel11.JPG"
import car12 from "../images/carousel12.JPG"
import car13 from "../images/carousel13.JPG"
import car14 from "../images/carousel14.JPG"
import patty from "../images/PattyMahomes.jpg"
import { Carousel } from "react-responsive-carousel";



export default () => (
    <Carousel width="80%" centerMode useKeyboardArrows>
      <div>
        <img alt="" src={car1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src={car2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src={car3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src={car4} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src={car5} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src={car8} />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img alt="" src={car9} />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img alt="" src={car10} />
        <p className="legend">Legend 10</p>
      </div>
      <div>
        <img alt="" src={car11} />
        <p className="legend">Legend 11</p>
      </div>
      <div>
        <img alt="" src={car12} />
        <p className="legend">Legend 12</p>
      </div>
      <div>
        <img alt="" src={car13} />
        <p className="legend">Legend 13</p>
      </div>
      <div>
        <img alt="" src={car14} />
        <p className="legend">Legend 14</p>
      </div>
    </Carousel>
);