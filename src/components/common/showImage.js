import React from "react";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";

function ShowImage(props) {
  // const image = getImage("../../assets/heroslider/growthpecypc.svg")
  const aa = props.image.toString();
//   const aa = ('growthpecypc').toString();
  console.log("image===>", `../../assets/heroslider/${aa}.svg`);
  const image= getImage(`../../assets/heroslider/${aa}.svg`)
  return (
    <div>
        {/* <img src={`../../assets/heroslider/${aa}.svg`}/> */}
      {/* == {props.image} == <GatsbyImage image ={props.image} alt={props.alt} /> */}
      {/* == {props.image} == <StaticImage src ={ "../assets/heroslider/growthpecypc.svg"} alt={props.alt} /> */}
      {aa ? (
        <>
          {props.image}
          <StaticImage
            placeholder="blurred"
            // layout="fixed"
            // width={200}
            // height={200}
            src={`../../assets/heroslider/${aa}.svg`}
            alt="asasas"
          />
        </>
      ) : null}

      {/* <StaticImage src ={"../../assets/heroslider/growthpecypc.svg"} alt={props.alt} /> */}
    </div>
  );
}

export default ShowImage;
