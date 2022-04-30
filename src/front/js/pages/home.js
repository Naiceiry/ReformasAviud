import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ReactPlayer from "react-player";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return <div className="contenthome text-center mt-5"></div>;
};
