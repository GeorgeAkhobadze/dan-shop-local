import { Link } from "react-router-dom";

import classes from "./PickCompany.module.css";
import HeaderComponent from "../HeaderComponent";

const PickCompany = () => {
  

  return (
    <div className={classes["pick-a-company-page"]}>
      <HeaderComponent />
      <h2>
        FÜR WELCHES UNTERNEHMEN MÖCHTEST <br />
        DU EIN ANGEBOT ERSTELLEN?
      </h2>
      <div className={classes.companies}>
        <Link to="/customer-types" className={classes.company}>
          <img src="https://danpearlman.com/wp-content/themes/dan-pearlman/img/temp/logos/logo_schwarz_ma_220.png" />
        </Link>
        <Link to="/customer-types" className={classes.company}>
          <img src="https://danpearlman.com/wp-content/themes/dan-pearlman/img/temp/logos/logo_schwarz_ma_220.png" />
        </Link>
        <Link to="/customer-types" className={classes.company}>
          <img src="https://danpearlman.com/wp-content/themes/dan-pearlman/img/temp/logos/logo_schwarz_ma_220.png" />
        </Link>
        <Link to="/customer-types" className={classes.company}>
          <img src="https://danpearlman.com/wp-content/themes/dan-pearlman/img/temp/logos/logo_schwarz_ma_220.png" />
        </Link>
        <Link to="/customer-types" className={classes.company}>
          <img src="https://danpearlman.com/wp-content/themes/dan-pearlman/img/temp/logos/logo_schwarz_ma_220.png" />
        </Link>
      </div>
    </div>
  );
};

export default PickCompany;
