import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ReactPlayer from "react-player";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=rnwlWn603g4"
        className="react-player"
        playing
        width="100%"
        height="100%"
      />
    </div>
  );
};
