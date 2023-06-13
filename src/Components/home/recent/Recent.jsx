import React from "react";
import Heading from "../../common/Heading";
import RecentCard from "./RecentCard";
import './Recent.css' ;
const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Properties Listed"
            subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex accusantium nisi tempore atque tempora quos sit quidem similique repudiandae quia!"
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
