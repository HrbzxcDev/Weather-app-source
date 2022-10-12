import React from "react";

const LocationBox = ({ image, titleLocation}) => (
    <div className="Location">
        <div className="Location_inner">
            <img src={image} width="100%" alt= {titleLocation}/>
            <span>{titleLocation}</span>
        </div>
    </div>

)