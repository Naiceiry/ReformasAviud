import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ReactPlayer from "react-player";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenthome text-center mt-5">
      <div className="embed-responsive embed-responsive-16by9">
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
    </div>
  );
};
