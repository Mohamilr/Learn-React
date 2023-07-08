import React, { useState, useEffect } from "react";

export const useWindowDimension = () => {
  const [windowDimensions, setWindowDimensions] = useState({});

  const handleResize = (e) => {
    setWindowDimensions({
      height: e.target.innerHeight,
      width: e.target.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
