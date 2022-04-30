import React from "react";
import { Link } from "react-router-dom";

export const Videos = () => {
  return (
    <div className="contenthome text-center mt-5">
      <div className="row videos-line embed-responsive embed-responsive-16by9">
        <iframe
          className="VideoIntro"
          width="300"
          height="215"
          src="https://www.youtube.com/embed/1Ud9KBbj2II?autoplay=1&mute=1&loop=1&controls=0"
          title="Reformas Aviud Intro"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="row videos-line embed-responsive embed-responsive-16by9">
        <iframe
          className="VideoIntro"
          width="300"
          height="215"
          src="https://www.youtube.com/embed/ca48oMV59LU?autoplay=0&mute=1&loop=1&controls=0"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="row videos-line embed-responsive embed-responsive-16by9">
        <iframe
          className="VideoIntro"
          width="300"
          height="215"
          src="https://www.youtube.com/embed/igPHZ0TJAUE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
