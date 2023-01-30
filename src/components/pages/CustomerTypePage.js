import { Link } from "react-router-dom";

import classes from "./CustomerTypePage.module.css";
import HeaderComponent from "../HeaderComponent";

const CustomerTypePage = () => {
  return (
    <div className={classes["customer-type-page"]}>
      <HeaderComponent />
      <h2>
        FÜR WELCHEN KUNDENTYP MÖCHTEST DU <br />
        EIN ANGEBOT ERSTELLEN?
      </h2>
      <div className={classes.types}>
        <Link to="/products" className={classes.type} >
          <div>
            <div className={classes["text-cont"]}>
              <p>
                Dein Kunde vertraut darauf, dass dan pearlman den Prozess
                einfach und schnell gestaltet und die richtige Expertise stellt.
                Wenn wir ihm transparent zeigen, wie er mit seinem Budget
                ergebnisorientiert und zeitnah zum definierten Ziel gelangt,
                wird er bereit sein, sich auf uns einzulassen und hat somit die
                Möglichkeit, sich anderen wichtigen Themen zu widmen.
              </p>
            </div>
            <h3>PURE</h3>
          </div>
        </Link>
        <Link to="/products" className={classes.type} >
          <div>
            <div className={classes["text-cont"]}>
              <p>
                Dein Kunde möchte über die Kreation begeistert werden? Strategie
                weckt hingegen wenig Interesse? Das ist der Passion Kunde. Er
                möchte einen Benchmark für seine Kunden schaffen und legt
                deshalb von Beginn des Projekts großen Wert auf visuelle und
                prägnante Ergebnisse und fühlt sich wohl, wenn ihm dan pearlman
                Führungskräfte- und Prozesssicherheit bieten kann.
                <br />
                <br />- coming soon -
              </p>
            </div>
            <h3>PASSION</h3>
          </div>
        </Link>
        <Link to="/products" className={classes.type}>
          <div>
            <div className={classes["text-cont"]}>
              <p>
                Komplexität ist hier das Stichwort. Dein Kunde arbeitet mit
                einer Multistakeholder-Matrix und Ergebnisse müssen mit
                unterschiedlichen Hierarchieebenen präzise abgestimmt werden.
                Auch sein Umfeld ist stets im Wandel und fordert uns heraus,
                weshalb er von dan pearlman analytische Inspiration und
                Innovation in allen Bereichen erwartet. Durch eine enge
                Kundenbindung und Wertschätzung kann eine langjährige
                Zusammenarbeit möglich werden
                <br />
                <br />- coming soon -
              </p>
            </div>
            <h3>PERFORM</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CustomerTypePage;
