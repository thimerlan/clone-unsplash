import React, { useRef } from "react";
import "./UserImg.scss";
import "./Buttons.scss";
import song from "../../song.mp3";
import { SyncLoader } from "react-spinners";

const User_img = ({
  data,
  NextPage,
  prevPage,
  PerPage,
  totalPages,
  lessPage,
  perPage,
  orderBy,
  orderByLatest,
  ortFilter,
  lazy,
}) => {
  const playSong = useRef(null);
  const bahh = () => {
    playSong.current.play();
  };
  return (
    <>
      <div className="content-images">
        {data.length ? (
          <div className="filter-btns">
            <div className="left-btns">
              <button onClick={PerPage} className="bn632-hover bn19">
                More
              </button>
              <button
                disabled={perPage != 9 ? false : true}
                onClick={lessPage}
                className="bn632-hover bn19"
              >
                Less
              </button>
              <button onClick={orderByLatest} class="bn632-hover bn20">
                {orderBy ? "Relevant" : "Latest"}
              </button>
            </div>
            <div className="right-btns">
              <div class="select">
                <select onChange={(e) => ortFilter(e)}>
                  <option selected value="landscape">
                    Landscape
                  </option>
                  <option value="portrait">Portrait</option>
                  <option value="squarish">Squarish</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={data.length ? "us-images" : ""}>
          {data.length ? (
            <>
              {lazy ? (
                <div className="lazy">
                  <SyncLoader color="#ebff00" />
                </div>
              ) : (
                data.map((datas) => {
                  return (
                    <div key={datas.id} className="us-img">
                      <img
                        src={datas.urls.regular}
                        alt={datas.alt_description}
                      />
                      <button className="download-btn ">
                        <a
                          href={`${datas.links.download}&force=true`}
                          class="wave-btn"
                        >
                          <span class="wave-btn__text">Download</span>
                          <span class="wave-btn__waves"></span>
                        </a>
                      </button>
                    </div>
                  );
                })
              )}
            </>
          ) : (
            <div className="emptyData">
              {totalPages === 0 ? (
                <>
                  <div className="scene">
                    <div className="text">Result Not Found!</div>
                    <br />
                    <div className="text dnt">DO NOT TOUCH</div>
                    <br />
                    <div onClick={bahh} className="sheep">
                      <span className="top">
                        <div className="body">
                          <audio ref={playSong}>
                            <source src={song} type="audio/mp3" />
                          </audio>
                        </div>
                        <div className="head">
                          <div className="eye one"></div>
                          <div className="eye two"></div>
                          <div className="ear one"></div>
                          <div className="ear two"></div>
                        </div>
                      </span>
                      <div className="legs">
                        <div className="leg"></div>
                        <div className="leg"></div>
                        <div className="leg"></div>
                        <div className="leg"></div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p>You haven't searched</p>
                </>
              )}
            </div>
          )}
          {lazy ? (
            "..."
          ) : (
            <div className="paginate">
              <button onClick={() => prevPage()} className="bn-32 bn32">
                Prev
              </button>
              <button onClick={() => NextPage()} className="bn-32 bn32">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default User_img;
