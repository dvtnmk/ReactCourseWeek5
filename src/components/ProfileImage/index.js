import React, { useEffect, useState } from "react";
import classnames from 'classnames';
import { Icon } from "antd";
import "./styles.scss";

function ProfileImage({ src, icon, size = "x4", ...rest }) {
  if (!/^x([1-9]|10)$/.test(size)) {
    size = "x4";
  }
  const [imageLoaded, setImageLoaded] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(src);
    };
    image.onerror = () => {};
  }, []);
  return (
    <div className={classnames('imageWrapper', `${size}`)}>
      {imageLoaded ? (
        <img className="image" src={imageLoaded} />
      ) : (
        <div className="loading"><span><Icon type="minus-circle" /></span></div>
      )}
      {icon && <div className="icon">{icon || <Icon type="plus" />}</div>}
    </div>
  );
}

export default ProfileImage;
