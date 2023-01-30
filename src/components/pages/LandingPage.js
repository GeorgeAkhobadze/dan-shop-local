import { Link } from "react-router-dom";

import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes["landing-page"]}>
      <h2>
        HERZLICH WILLKOMMEN <br />
        IM DAN SHOP
      </h2>
      <p>
        Der dan shop wird dich dabei unterstützen in nur wenigen Schritten{" "}
        <br />
        ein Angebot zu erstellen und intuitiv mit dem Kunden zu kollaborieren
      </p>
      <Link to="/pick-a-company" className={classes["landing-btn"]}>
        Los geht's
      </Link>
    </div>
  );
};

export default LandingPage;
