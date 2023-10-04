import React from "react";

function HistoryVideo({ videoUrl, thumbnailUrl }) {
  return (
    <div>
      <div className="container">
        <div className="card mx-auto" style={{ width: "36rem" }}>
          <video controls poster="assets/img/historyImg1.png">
            <source src="assets/video/Video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default HistoryVideo;
