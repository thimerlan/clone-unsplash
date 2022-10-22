import React from "react";
import "./User_img.scss";
// &force=true
const User_img = ({ data, page, NextPage, prevPage }) => {
  return (
    <>
      <div className="content-images">
        <div className={data.length ? "us-images" : ""}>
          {data.length ? (
            <>
              {data.map((datas) => {
                return (
                  <div key={datas.id} className="us-img">
                    <img src={datas.urls.regular} alt={datas.alt_description} />

                    <button className="download-btn bn54">
                      <span className="bn54span">
                        <a
                          target={"_blank"}
                          href={`${datas.links.download}&force=true`}
                        >
                          Download
                        </a>
                      </span>
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="emptyData">
              <p>You haven't searched</p>
            </div>
          )}
          <div className="paginate">
            <button onClick={() => prevPage()} className="bn-32 bn32">
              Prev
            </button>
            <button onClick={() => NextPage()} className="bn-32 bn32">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_img;
