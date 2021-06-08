import React from "react";

const PostGroup = () => (
  <div id="groupBox">
    <div className="postGroup" id="marq1" style={{ marginRight: "16px" }}>
      <div className="marquee">
        <div className="pg">
          <img
            src={process.env.PUBLIC_URL + "./resources/group0.png"}
            alt="group0"
          />
          <img
            src={process.env.PUBLIC_URL + "./resources/group1.png"}
            alt="group1"
          />
        </div>
        <div className="pg">
          <img
            src={process.env.PUBLIC_URL + "./resources/group0.png"}
            alt="group0"
          />
          <img
            src={process.env.PUBLIC_URL + "./resources/group1.png"}
            alt="group1"
          />
        </div>
      </div>
    </div>
    <div className="postGroup " id="marq2" style={{ marginRight: "16px" }}>
      <div className="marquee">
        <div className="pg">
          <img
            src={process.env.PUBLIC_URL + "./resources/group1.png"}
            alt="group1"
          />
          <img
            src={process.env.PUBLIC_URL + "./resources/group2.png"}
            alt="group2"
          />
        </div>
        <div className="pg">
          <img
            src={process.env.PUBLIC_URL + "./resources/group1.png"}
            alt="group1"
          />
          <img
            src={process.env.PUBLIC_URL + "./resources/group2.png"}
            alt="group2"
          />
        </div>
      </div>
    </div>
    <div className="postGroup " id="marq3">
      <div className="marquee">
        <div className="pg">
          <img
            src={process.env.PUBLIC_URL + "./resources/group2.png"}
            alt="group2"
          />
          <img
            src={process.env.PUBLIC_URL + "./resources/group0.png"}
            alt="group0"
          />
        </div>
        <div className="pg">
          <img
            src={process.env.PUBLIC_URL + "./resources/group2.png"}
            alt="group2"
          />
          <img
            src={process.env.PUBLIC_URL + "./resources/group0.png"}
            alt="group0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default PostGroup;
