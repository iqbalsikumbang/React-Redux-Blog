import React from "react";
import "./Slide.css";

export default function Slide({
  img1,
  img2,
  img3,
  img4,
  title1,
  title2,
  title3,
  title4,
  body1,
  body2,
  body3,
  body4,
  body5,
  body6,
  body7,
  body8
}) {
  const bgImg1 = {
    backgroundImage: `url(${img1})`,
  };
  const bgImg2 = {
    backgroundImage: `url(${img2})`,
  };
  const bgImg3 = {
    backgroundImage: `url(${img3})`,
  };
  const bgImg4 = {
    backgroundImage: `url(${img4})`,
  };
  const par = {
    textIndent: "30px",
  };
  return (
    <React.Fragment>
      <div id="slide1" style={bgImg1} className="slide">
        <div className="title">
          <h1>{title1}</h1>
          <p style={par}>{body1}</p>
          <p style={par}>{body2}</p>
        </div>
        <img src={img2} alt="kpop-img" className="slid" />
        <img src={img3} alt="kpop-img" className="slid" />
      </div>
      <div id="slide2" style={bgImg2} className="slide">
        <div className="title">
          <h1>{title2}</h1>
          <p style={par}>{body3}</p>
          <p style={par}>{body4}</p>
        </div>
        
      </div>

      <div id="slide3" style={bgImg3} className="slide">
        <div className="title">
          <h1>{title3}</h1>
          <p style={par}>{body5}</p>
          <p style={par}>{body6}</p>
        </div>
        <img src={img1} alt="kpop-img" className="slid" />
        <img src={img4 ? img4 : img3} alt="kpop-img" className="slid" />
      </div>

      {title4 && <div id="slide4" style={bgImg4} className="slide">
        <div className="title">
          <h1>{title4}</h1>
          <p style={par}>{body7}</p>
          <p style={par}>{body8}</p>
        </div>
        
      </div>}
    </React.Fragment>
  );
}
