import React from "react";
import "./User_img.scss";
const User_img = ({ data }) => {
  return (
    <div className="content-images">
      <div className="us-images">
        {data.map((datas) => {
          return (
            <div key={datas.id} className="us-img">
              <img src={datas.urls.regular} alt="xxx" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User_img;
