import React from 'react'
import './SmokerInfo.css'


const SmokerInfo = props => (
    <div className="Info">
        <img src={props.image} alt="smoker-pic"/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default SmokerInfo;