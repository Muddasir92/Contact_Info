import React from "react";
import "./contactInfo";
import "../App"

function Card(props) {
  console.log(props);
  return (
    // CSS used in App.css
    <div className="container">
            <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="cimage"
          src={props.img}
          alt="loading"
          
        />
      </div>
      <div className="infoDiv">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
