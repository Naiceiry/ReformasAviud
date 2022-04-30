import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ReactPlayer from "react-player";
import { Videos } from "../component/videos.js";
import title from "../../img/title.png";

export const Reviews = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenthome row text-center mt-5">
      <div className="videos col-3">
        <Videos></Videos>
      </div>
      <div className="content col-9">
        <div className="row reformasdiv">
          <img className="imgaviud" src={title} />
        </div>
        <div className="descriptionhome row">
          <p>
            conectar con google para que se publiquen las opiniones de los clientes
            
          </p>
        </div>
      </div>
    </div>
  );
};