import { Link } from "react-router-dom";
import classes from "./HeaderComponent.module.css";

const HeaderComponent = () => {
  return (
    <header>
      <div className={classes["header-cont"]}>
        <Link to="/" className={classes.logo}>dan shop</Link>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={()=>{ localStorage.clear();}}>Home</Link>
            </li>
            <li>
              <a>Mein Dashboard</a>
            </li>
            <li>
              <a>Einkaufskorb</a>
            </li>
            <li>
              <a>Supportcenter</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
