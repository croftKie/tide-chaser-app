import { useRef } from "react";
import { Link } from "react-router-dom";
import { scaleOutIn, scaleOut, scaleIn } from "../../utilities/animations";
import Button from "../elements/Button";
import Brand from "../elements/Brand";

function HomeNav() {
  return (
    <>
      <nav className="homeNav">
        <Brand />
        <div className="links">
          <Button
            href={"http://localhost:5174/"}
            text={"Get Started"}
            link={true}
          />
        </div>
      </nav>
    </>
  );
}

export default HomeNav;
