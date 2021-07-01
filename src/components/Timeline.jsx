import React from "react";

const Timeline = ({chirp}) => {
  return (
    <>
    <div className="tl-div">
      <div className="card2">
        <div className="card-body display-flex-end">
          <h1 className="card-title">Recent Chirps!
                 {chirp.username} {chirp.message}
          </h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
