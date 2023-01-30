import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./ProductsPage.module.css";
import HeaderComponent from "../HeaderComponent";

const ProductsPage = () => {
  const markenentwicklung = {};
  const naming = {};
  const omnichannelKonzept = {};
  const corporateDesign = {};
  const brandingKonzept = {};

  const [markenentwicklungModal, setMarkenentwicklungModal] = useState(false);

  const [markenentwicklungModalYes, setMarkenentwicklungModalYes] = useState(false);

  const markenentwicklungClick = () => {
    if (JSON.parse(localStorage.getItem("markenentwicklung"))?.isInCart) {
      console.log("test")
      setMarkenentwicklungModal(true);
    }
  };

  return (
    <div className={classes["products-page"]}>
      <HeaderComponent />
      <div className={classes["products-page-content"]}>
        <p>
          Das Angebot für unsere Pure-Kunden orientiert sich stark an einem
          optimalen Preis-Leistungs-Verhältnis und bietet somit nur eine
          minimale Möglichkeit für individuelle Anpassungen. Unser Pure_Kunden
          lieben Prozesssicherheit und diese wollen wir ihnen geben.
        </p>

        <h2>PRODUKTE </h2>
        <p>
          Über die Pakete hast du die Möglichkeit deine Angebotsbausteine zu
          konfigurieren und dir dein Angebot effizient individuell
          zusammenstellen. Der Einsatz dieser Pakete wird für Passion und
          Performance Kunden empfohlen.
        </p>
        <div className={classes.products}>
          <Link
            to={
              JSON.parse(localStorage.getItem("markenentwicklung"))?.isInCart
                ? "/products"
                : "/markentwicklung"
            }
            className={classes.product}
            onClick={() => {
              markenentwicklungClick();
              console.log(markenentwicklungModalYes)
              if(!JSON.parse(localStorage.getItem("markenentwicklung"))?.isInCart){
                markenentwicklung.name = "MARKENENTWICKLUNG";
                markenentwicklung.moneyAmount = 5000;
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(markenentwicklung)
                );
              }
            }}
          >
            <div className={classes.cont}>
              <div className={classes["product-img"]}></div>
              <h5>MARKENENTWICKLUNG</h5>
            </div>
          </Link>
          <Link
            to="/naming"
            className={classes.product}
            onClick={() => {
              naming.name = "NAMING";
              naming.moneyAmount = 5000;
              localStorage.setItem("naming", JSON.stringify(naming));
            }}
          >
            <div className={classes.cont}>
              <div className={classes["product-img"]}></div>
              <h5>NAMING</h5>
            </div>
          </Link>
          <Link
            to="/omnichannel-konzept"
            className={classes.product}
            onClick={() => {
              omnichannelKonzept.name = "OMNICHANNEL-KONZEPT";
              omnichannelKonzept.moneyAmount = 5000;
              localStorage.setItem(
                "omnichannelKonzept",
                JSON.stringify(omnichannelKonzept)
              );
            }}
          >
            <div className={classes.cont}>
              <div className={classes["product-img"]}></div>
              <h5>OMNICHANNEL-KONZEPT</h5>
            </div>
          </Link>
          <Link
            to="/corporate-design"
            className={classes.product}
            onClick={() => {
              corporateDesign.name = "CORPORATE DESIGN";
              corporateDesign.moneyAmount = 5000;
              localStorage.setItem(
                "corporateDesign",
                JSON.stringify(corporateDesign)
              );
            }}
          >
            <div className={classes.cont}>
              <div className={classes["product-img"]}></div>
              <h5>CORPORATE DESIGN</h5>
            </div>
          </Link>
          <Link
            to="/employer-branding-konzept"
            className={classes.product}
            onClick={() => {
              brandingKonzept.name = "EMPLOYER BRANDING-KONZEPT";
              brandingKonzept.moneyAmount = 5000;
              localStorage.setItem(
                "brandingKonzept",
                JSON.stringify(brandingKonzept)
              );
            }}
          >
            <div className={classes.cont}>
              <div className={classes["product-img"]}></div>
              <h5>EMPLOYER BRANDING-KONZEPT</h5>
            </div>
          </Link>
        </div>
        <h2>ANGEBOTSPROZESS </h2>
        <p>
          Der Angebotsprozess ist wie ein vor-konfektioniertes Angebot. Er
          bieten einen vordefinierten, logischen und erprobten Projektprozess,
          welcher nur minimal auf die Bedürfnisse der Kunden konfigurierbar ist.
        </p>
        <div>
          <div className={classes.product}>
            <div className={classes.cont}>
              <div className={classes["product-img-branding"]}></div>
              <h5>BRANDING</h5>
            </div>
          </div>
        </div>
      </div>
      {markenentwicklungModal && (
        <div className={classes.modalbkgrnd}>
          <div className={classes.modal}>
            <div
              className={classes.close}
              onClick={() => {
                setMarkenentwicklungModal(false);
              }}
            >
              X
            </div>
            <div>
              <h4>Do you want to continue ?</h4>
            </div>
            <div className={classes.btns}>
              <Link onClick={()=> {setMarkenentwicklungModalYes(true);  markenentwicklung.name = "MARKENENTWICKLUNG";
                markenentwicklung.moneyAmount = 5000;
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(markenentwicklung)
                ); } } to="/markentwicklung" >Yes </Link>
              <a
                onClick={() => {
                  setMarkenentwicklungModal(false);
                }}
              >
                No
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
