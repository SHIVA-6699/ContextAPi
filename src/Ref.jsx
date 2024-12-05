import React, { useRef, useState, useEffect, Fragment } from "react";
import Client from "./Client";

function Ref() {
  const [positon, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  let id;
  useEffect(() => {
    const handleMouse = (e) => {
       id = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 200);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse)
       clearTimeout(id);
    };
  }, []);
  return (
    <Fragment>
      <Fragment>
        <div
          className=""
          style={{
            background: "blue",
            width: "30px",
            height: "30px",
            position: "relative",
            top: positon.y,
            left: positon.x,
            borderRadius: "50%",
          }}
        ></div>
      </Fragment>
    </Fragment>
  );
}

export default Ref;
