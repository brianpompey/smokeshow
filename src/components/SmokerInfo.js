import React from 'react'
import './SmokerInfo.css'


const SmokerInfo = props => (
    /** need image to work out somehow */
    /**need to add better text for each smoker as well */
    <div className="Info">
        <img src={props.image} alt="smoker-pic"/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.price}</p>
    </div>
)

export default SmokerInfo;