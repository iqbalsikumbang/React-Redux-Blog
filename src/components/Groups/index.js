import React from "react";
import "./groups.css";

export default function groups({ name, fandomName, company, img }) {
  return (
    <div>
      <div className="cardWrap">
        <div className="card">
          <div className="cardBg">
            <img src={img} alt="kpop-img" />
          </div>
          <div className="cardInfo">
            <h3 className="cardTitle">{name}</h3>
            <p>
              <strong>{fandomName}</strong> || <strong>{company}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
