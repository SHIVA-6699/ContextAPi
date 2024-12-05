import { forwardRef } from "react";

const Client = forwardRef((props,ref) => {
  return (
    <Fragment>
      <div
        className=""
        ref={ref}
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
  );
}
)
export default Client
