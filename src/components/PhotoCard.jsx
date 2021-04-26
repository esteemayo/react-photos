import React from "react";

const PhotoCard = ({ photo: { title, thumbnailUrl } }) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem", marginBottom: "20" }}>
        <img src={thumbnailUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">
            {title.split(" ").slice(0, 4).join(" ")}...
          </h5>
        </div>
      </div>
      <br />
    </div>
  );
};

export default PhotoCard;
