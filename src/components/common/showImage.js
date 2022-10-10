import React from "react";
let images = require.context('../../assets/heroslider', true);


function ShowImage(props) {
  const aa = props.image.toString();
  console.log("image===>", images(`./${aa}.svg`).default);
  return (
    <div>
        <img src={ images(`./${aa}.svg`).default}/>
    </div>
  );
}

export default ShowImage;
