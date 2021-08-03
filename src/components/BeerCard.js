import React, { useState } from "react";

const BeerCard = ({ beer }) => {
  const {
    name,
    tagline,
    image_url,
    boil_volume,
    brewers_tips,
    contributed_by,
    description,
    first_brewed,
    food_pairing,
    volume
  } = beer;
  let contributed = contributed_by.substr(0, contributed_by.indexOf("<"));
  const [isShown, setIsShown] = useState(false);
  const [btnText, setBtnText] = useState("show details");
  const showHideDetail = () => {
    if (btnText === "show details") {
      console.log(btnText);
      setBtnText("hide details");
    } else {
      console.log(btnText);
      setBtnText("show details");
    }
  };

  return (
    <div className="beer">
      <div className="img-div">
        <img
          src={image_url}
          alt={` ${name}`}
          className="beer-img"
          style={
            btnText === "hide details"
              ? { maxWidth: "280px", maxHeight: "280px" }
              : { maxWidth: "180px", maxHeight: "180px" }
          }
        />
      </div>
      <div className="beer-info">
        <p className="name">{name}</p>
        <p>{tagline}</p>
        <div
          className="btn-box"
          onMouseEnter={() => {
            setIsShown(true);
          }}
          onMouseLeave={() => {
            setIsShown(false);
          }}
        >
          {(isShown || btnText === "hide details") && (
            <button className="btn" onClick={showHideDetail}>
              {btnText}
            </button>
          )}
        </div>
        {btnText === "hide details" && (
          <div className="beer-detail">
            <ul>
              <li>
                <span className="detail-title"> boil volume: </span>
                {boil_volume.value} {boil_volume.unit}
              </li>
              <li>
                <span className="detail-title"> brewers_tips: </span>
                {brewers_tips}
              </li>
              <li>
                <span className="detail-title"> contributed_by: </span>
                {contributed}
              </li>
              <li>
                <span className="detail-title"> description: </span>
                {description}
              </li>
              <li>
                <span className="detail-title"> first_brewed: </span>
                {first_brewed}
              </li>
              <li>
                <span className="detail-title">food_pairing: </span>
                <ul className="li-pairing">
                  {food_pairing.map(pairing => (
                    <li key={pairing} className="food-pairing">
                      {pairing}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="detail-title"> ingredients : </span>
              </li>
              <li>
                <span className="detail-title"> tagline: </span>
                {tagline}
              </li>
              <li>
                <span className="detail-title"> volume: </span>
                {volume.value}liters
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeerCard;