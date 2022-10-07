import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import right from "../../assets/companies/arrow-right.svg";
import left from "../../assets/companies/arrow-left.svg";

gsap.registerPlugin(ScrollToPlugin);

const ScrollBtn = (props) => {
  const btnStyle = `btn-style ${props.color}`;
  console.log("Button props==>>", props);
  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 0.1,
      scrollTo: {
        y: `${props.target}`,
        offsetY: `${props.offset}`,
      },
    });
  };
  return (
    <div>
      {props.showBtn === "left" ? (
        <button className={btnStyle} onClick={handleClick}>
          <img src={left} alt="Arrow buttons" />
        </button>
      ) : (
        <button disabled className={btnStyle} style={{ opacity: 0.5 }}>
          <img src={left} alt="Arrow buttons" />
        </button>
      )}
      {props.showBtn === "right" ? (
        <button className={btnStyle} onClick={handleClick}>
          <img src={right} alt="Arrow buttons" />
        </button>
      ) : (
        <button disabled className={btnStyle} style={{ opacity: 0.5 }}>
          <img src={right} alt="Arrow buttons" />
        </button>
      )}
    </div>
  );
};

export default ScrollBtn;
