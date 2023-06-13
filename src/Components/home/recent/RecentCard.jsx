import React from "react";
import { list } from '../../../data/data';
const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b79" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4> {name} </h4>
                <p>
                  <i className="fa fa-location-dot"></i>
                  {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>
                  <label><strong>/sqft</strong></label>
                </div>
                <span><strong>{type}</strong></span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
