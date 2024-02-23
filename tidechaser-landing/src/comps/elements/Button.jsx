import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { scaleOut, scaleIn } from "../../utilities/animations";

const Button = ({ href, text, link = false }) => {
  const buttonRef = useRef();

  if (link) {
    return (
      <Link
        ref={buttonRef}
        onMouseEnter={() => scaleOut(buttonRef.current)}
        onMouseLeave={() => scaleIn(buttonRef.current)}
        className="button"
        id="no-underline"
        to={href}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => scaleOut(buttonRef.current)}
      onMouseLeave={() => scaleIn(buttonRef.current)}
      className="button"
    >
      {text}
    </button>
  );
};

export default Button;
