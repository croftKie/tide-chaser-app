import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { scaleOut, scaleIn } from "../../utilities/animations";

const Brand = () => {
  const brandRef = useRef();

  return (
    <Link
      ref={brandRef}
      onMouseEnter={() => scaleOut(brandRef.current)}
      onMouseLeave={() => scaleIn(brandRef.current)}
      className="brand"
      to="/"
    >
      <h3>Tide Chaser</h3>
    </Link>
  );
};

export default Brand;
