import React from "react";

const ImgElement = (props) => {
  return (
    <>
      <div class={`scroller-img-woym ${props.first}`}>
        <div>
          <img src={props.src} width="144" height="180" alt={props.label} />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ImgElement;
