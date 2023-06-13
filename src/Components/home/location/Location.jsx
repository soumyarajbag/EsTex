import React from "react";
import "./location.css";
import Heading from "../../common/Heading";
import { location } from "../../../data/data";
const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore by Location"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere minima eaque tempora molestiae commodi cupiditate ipsa totam, ut repudiandae quaerat dolor assumenda amet unde odit et dolore? Corporis dignissimos animi ut."/>

            <div className="content grid3 mtop">
                {location.map((items , index )=>{
                     return (<div className="box" key = {index}>
                        <img src={items.cover} alt=''/>
                        <div className="overlay">
                            <h5>{items.name}</h5>
                            <p>
                                <label>{items.Villas} </label>
                                <label>{items.Offices} </label>
                                <label>{items.Apartments} </label>
                            </p>
                        </div>
                     </div>)
                })}
            </div>
        </div>
      </section>
    </>
  );
};

export default Location;
