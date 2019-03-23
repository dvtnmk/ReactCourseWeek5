import React, { useState, useEffect, useRef } from "react";
import { usePreload } from "helpers/util";
import "./styles.scss";
import Dragable from "components/Dragable";
function CoverImage({ src }) {
  const [imagePath, setImagePath] = useState(null);
  const coverRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    usePreload(src)
      .then(result => {
        setImagePath(result);
      })
      .catch(error => console.log(error, "Cover image can't loaded"));
  }, []);
  function onDrag(e) {
    const { clientHeight, clientWidth } = coverRef.current;
    const { clientY } = e;
    const moveY = 100 - (clientY * 100) / clientHeight;
    console.log("percent", moveY);
    imgRef.current.style.objectPosition = `center ${moveY}%`;
    // console.log("Percent", (clientY + 100) / clientHeight);
  }
  function onDragEnd() {
    console.log("drag End");
  }
  return (
    <Dragable dragRef={coverRef} onDrag={onDrag} onDragEnd={onDragEnd}>
      <div className="coverImageWrapper">
        {imagePath && <img ref={imgRef} draggable={false} src={imagePath} />}
      </div>
    </Dragable>
  );
}

export default CoverImage;
