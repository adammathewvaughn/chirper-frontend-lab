import React from "react";

const Timeline = (props) => {
  return (
    <>
    <div className="bodydiv">
      <div className="card2">
        <div className="card-body display-flex-end">
          <h1 className="card-title">Recent Chirps!
                 {props.chirps.username} {props.chirps.message}
          </h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
