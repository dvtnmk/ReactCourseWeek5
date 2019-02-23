import React, { useEffect, useState } from "react";

function ProfileImage({ src, icon, size = "medium", ...rest }) {
  if (!/^(small|medium|large)$/.test(size)) {
    size = "medium";
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
    <div className={`imageWrapper ${size}`}>
      {imageLoaded ? (
        <img className="image" src={imageLoaded} />
      ) : (
        <div className="image">Loading...</div>
      )}
    </div>
  );
}

export default ProfileImage;
