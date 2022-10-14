import React from "react";
let images = require.context('../../assets/heroslider', true);


function ShowImage(props) {
  const aa = props.image.toString();
  return (
    <div>
        <img alt="contact icons" src={ images(`./${aa}.svg`).default}/>
    </div>
  );
}

export default ShowImage;
