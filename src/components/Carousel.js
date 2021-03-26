import React from 'react'
import eiffel from "../images/EiffelTower.jpg"
import patty from "../images/PattyMahomes.jpg"
import { Carousel } from "react-responsive-carousel";



export default () => (
    <Carousel width="80%" centerMode useKeyboardArrows>
      <div>
        <img alt="" src={eiffel} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src={patty} />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
);