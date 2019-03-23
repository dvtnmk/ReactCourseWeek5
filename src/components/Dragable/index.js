import React, { useState, useRef } from "react";

function Dragable({ children, onDrag, onDragEnd, dragRef }) {
  const [isMouseDown, setMouseDown] = useState(false);
  function onMouseDown(e) {
    setMouseDown(true);
  }
  function onMouseMove(e) {
    if (!isMouseDown) return;
    onDrag(e);
  }
  function onMouseUp(e) {
    setMouseDown(false);
    onDragEnd(e);
  }
  return (
    <div
      ref={dragRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );
}

Dragable.defaultProps = {
  onDrag: () => {},
  onDragEnd: () => {}
};

export default Dragable;
