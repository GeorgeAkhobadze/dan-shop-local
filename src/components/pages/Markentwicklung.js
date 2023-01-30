import { useState } from "react";

import classes from "./ProductComp.module.css";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";

const Markenentwicklung = () => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("markenentwicklung"))
  );

  const [secondQuestion, setSecondQuestion] = useState(true);
  const [thirdQuestion, setThirdQuestion] = useState(false);
  const [fourthQuestion, setFourthQuestion] = useState(false);
  const [moduleChoose, setModuleChoose] = useState(false);
  const [fifthQuestion, setFifthQuestion] = useState(false);
  const [catering, setCatering] = useState(false);
  const [teambuilding, setTeambuilding] = useState(false);
  const [overview, setOverview] = useState(false);
  const [addCartModal, setAddCartModal] = useState(false);
  const [showMoneyAmount, setShowMoneyAmount] = useState(false);

  const [value, setValue] = useState(1);
  const [moderator, setModerator] = useState(1);
  const [assistant, setAssistant] = useState(1);

  const [moneyAmount, setMoneyAmount] = useState(5000);

  const [nutzerinterviews, setNutzerinterviews] = useState(3);
  const [stakeholderinterviews, setStakeholderinterviews] = useState(3);
  const [designAudit, setDesignAudit] = useState(true);
  const [kommunikationsanalyse, setKommunikationsanalyse] = useState(true);
  const [markenarchitektur, setMarkenarchitektur] = useState(true);
  const [produktportfolio, setProduktportfolio] = useState(true);
  const [impulsvortrag, setImpulsvortrag] = useState(true);
  const [fingerfood, setFingerfood] = useState(true);
  const [kuchen, setKuchen] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [scrumKitchen, setScrumKitchen] = useState(true);
  const [drinks, setDrinks] = useState(true);
  const [dachterasse, setDachterasse] = useState(true);

  product.nutzerinterviews = !Number(
    JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
  )
    ? 3
    : Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      );
  product.stakeholderinterviews = !Number(
    JSON.parse(localStorage.getItem("markenentwicklung")).stakeholderinterviews
  )
    ? 3
    : Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      );

  const addMoneyAmount = (amount) => {
    setMoneyAmount(Number(localStorage.getItem("moneyAmount")) + amount);
    localStorage.setItem("moneyAmount", moneyAmount);
  };

  const handleNutzerinterviewsChange = (event) => {
    const nutzerinterviewsLast = Number(
      JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
    );
    setNutzerinterviews(event.target.value);
    product.nutzerinterviews = event.target.value;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));

    const currentAmount = JSON.parse(
      localStorage.getItem("markenentwicklung")
    ).moneyAmount;

    if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      ) === 5 &&
      nutzerinterviewsLast === 3
    ) {
      setMoneyAmount(currentAmount + 200);
      product.moneyAmount = currentAmount + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      ) === 10 &&
      nutzerinterviewsLast === 3
    ) {
      setMoneyAmount(currentAmount + 500);
      product.moneyAmount = currentAmount + 500;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      ) === 5 &&
      nutzerinterviewsLast === 10
    ) {
      setMoneyAmount(currentAmount - 300);
      product.moneyAmount = currentAmount - 300;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      ) === 10 &&
      nutzerinterviewsLast === 5
    ) {
      setMoneyAmount(currentAmount + 300);
      product.moneyAmount = currentAmount + 300;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      ) === 3 &&
      nutzerinterviewsLast === 5
    ) {
      setMoneyAmount(currentAmount - 200);
      product.moneyAmount = currentAmount - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).nutzerinterviews
      ) === 3 &&
      nutzerinterviewsLast === 10
    ) {
      setMoneyAmount(currentAmount - 500);
      product.moneyAmount = currentAmount - 500;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      setMoneyAmount(currentAmount);
      product.moneyAmount = currentAmount;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleStakeholderinterviewsChange = (event) => {
    const stakeholderinterviewsLast = Number(
      JSON.parse(localStorage.getItem("markenentwicklung"))
        .stakeholderinterviews
    );
    setStakeholderinterviews(event.target.value);
    product.stakeholderinterviews = event.target.value;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    const currentAmount = JSON.parse(
      localStorage.getItem("markenentwicklung")
    ).moneyAmount;

    if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      ) === 5 &&
      stakeholderinterviewsLast === 3
    ) {
      setMoneyAmount(currentAmount + 200);
      product.moneyAmount = currentAmount + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      ) === 10 &&
      stakeholderinterviewsLast === 3
    ) {
      setMoneyAmount(currentAmount + 500);
      product.moneyAmount = currentAmount + 500;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      ) === 5 &&
      stakeholderinterviewsLast === 10
    ) {
      setMoneyAmount(currentAmount - 300);
      product.moneyAmount = currentAmount - 300;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      ) === 10 &&
      stakeholderinterviewsLast === 5
    ) {
      setMoneyAmount(currentAmount + 300);
      product.moneyAmount = currentAmount + 300;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      ) === 3 &&
      stakeholderinterviewsLast === 5
    ) {
      setMoneyAmount(currentAmount - 200);
      product.moneyAmount = currentAmount - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else if (
      Number(
        JSON.parse(localStorage.getItem("markenentwicklung"))
          .stakeholderinterviews
      ) === 3 &&
      stakeholderinterviewsLast === 10
    ) {
      setMoneyAmount(currentAmount - 500);
      product.moneyAmount = currentAmount - 500;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      setMoneyAmount(currentAmount);
      product.moneyAmount = currentAmount;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleDesignAuditChange = () => {
    setDesignAudit(!designAudit);
    product.designAudit = designAudit;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (designAudit) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleKommunikationsanalyseChange = () => {
    setKommunikationsanalyse(!kommunikationsanalyse);
    product.kommunikationsanalyse = kommunikationsanalyse;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (kommunikationsanalyse) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleMarkenarchitekturChange = () => {
    setMarkenarchitektur(!markenarchitektur);
    product.markenarchitektur = markenarchitektur;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (markenarchitektur) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };
  const handleProduktportfolioChange = () => {
    setProduktportfolio(!produktportfolio);
    product.produktportfolio = produktportfolio;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (produktportfolio) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };
  const handleImpulsvortragChange = () => {
    setImpulsvortrag(!impulsvortrag);
    product.impulsvortrag = impulsvortrag;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (impulsvortrag) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 200;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  function analogClick() {
    setThirdQuestion(true);
    setSecondQuestion(false);
  }

  function beiDanClick() {
    setThirdQuestion(false);
    setFourthQuestion(true);
  }

  let [changeInputfrom13, setChangeInputfrom13] = useState(false);
  let [changeInputfrom25, setChangeInputfrom25] = useState(false);

  const rangeInputHandler = (event) => {
    setValue(event.target.value);
    setModerator(event.target.value > 12 ? 2 : 1);
    setAssistant(event.target.value > 24 ? 2 : 1);

    if (Number(event.target.value) >= 13 && Number(event.target.value) < 25) {
      if (!changeInputfrom13) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
          ) + 1000;
        localStorage.setItem("markenentwicklung", JSON.stringify(product));
      }
      if (changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
          ) - 1000;
        localStorage.setItem("markenentwicklung", JSON.stringify(product));
      }
      setChangeInputfrom25(false);
      setChangeInputfrom13(true);
    } else if (Number(event.target.value) < 13) {
      product.moneyAmount = Number(
        JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
      );
      if (changeInputfrom13) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
          ) - 1000;
        localStorage.setItem("markenentwicklung", JSON.stringify(product));
      }
      setChangeInputfrom13(false);
    } else if (Number(event.target.value) >= 25) {
      if (!changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
          ) + 1000;
        localStorage.setItem("markenentwicklung", JSON.stringify(product));
      }
      setChangeInputfrom25(true);
    }

    localStorage.setItem("markenentwicklung", JSON.stringify(product));
  };

  const cateringClick = () => {
    if (!catering) {
      product.catering = true;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 90;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.catering = false;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 90;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const teambuildingClick = () => {
    if (!teambuilding) {
      product.teambuilding = true;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.teambuilding = false;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleFingerfoodChange = () => {
    setFingerfood(!fingerfood);
    product.fingerfood = fingerfood;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (fingerfood) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 30;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 30;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleKuchenChange = () => {
    setKuchen(!kuchen);
    product.kuchen = kuchen;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (kuchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 30;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 30;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleLunchChange = () => {
    setLunch(!lunch);
    product.lunch = lunch;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (lunch) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 90;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 90;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleScrumKitchenChange = () => {
    setScrumKitchen(!scrumKitchen);
    product.scrumKitchen = scrumKitchen;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (scrumKitchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 120;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 120;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleDrinksChange = () => {
    setDrinks(!drinks);
    product.drinks = drinks;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (drinks) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 30;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 30;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  const handleDachterasseChange = () => {
    setDachterasse(!dachterasse);
    product.dachterasse = dachterasse;
    localStorage.setItem("markenentwicklung", JSON.stringify(product));
    if (dachterasse) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) + 45;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount
        ) - 45;
      localStorage.setItem("markenentwicklung", JSON.stringify(product));
    }
  };

  return (
    <div className={classes["product-page"]}>
      <HeaderComponent />
      {
        <div className={classes["money-amount"]}>
          {" "}
          TOTAL:{" "}
          {JSON.parse(localStorage.getItem("markenentwicklung")).moneyAmount}€
        </div>
      }

      {secondQuestion && (
        <div className={classes.secondQuestion}>
          <h2>WÄHLE DIE ART DES WORKSHOPS</h2>
          <div className={classes.answers}>
            <div
              className={classes.answer}
              onClick={() => {
                product.workshopType = "digital";
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              <div className={classes.img}></div>
              <h5>DIGITAL</h5>
            </div>
            <div
              className={classes.answer}
              onClick={() => {
                analogClick();
                product.workshopType = "analog";
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              <div className={classes.img}></div>
              <h5>ANALOG</h5>
            </div>
            <div
              className={classes.answer}
              onClick={() => {
                product.workshopType = "hybrid";
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              <div className={classes.img}></div>
              <h5>HYBRID</h5>
            </div>
          </div>
        </div>
      )}

      {thirdQuestion && (
        <div className={classes.thirdQuestion}>
          <h2>WO SOLL DER WORKSHOP STATTFINDEN?</h2>
          <div className={classes.answers}>
            <div
              className={classes.answer}
              onClick={() => {
                beiDanClick();
                product.workshopPlace = "bei dan";
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              <div className={classes.img}></div>
              <h5>BEI DAN</h5>
            </div>
            <div
              className={classes.answer}
              onClick={() => {
                product.workshopPlace = "at the customer";
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              <div className={classes.img}></div>
              <h5>BEIM KUNDEN</h5>
            </div>
            <div
              className={classes.answer}
              onClick={() => {
                product.workshopPlace = "externer workshop space";
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              <div className={classes.img}></div>
              <h5>EXTERNER WORKSHOP SPACE</h5>
            </div>
          </div>
        </div>
      )}

      {fourthQuestion && (
        <div className={classes.fourthQuestion}>
          <h2>WIE VIELE TEILNEHMENDEN HAST DU?</h2>
          <div>
            <input
              type="range"
              min="1"
              max="30"
              className={classes.participants}
              value={value}
              onChange={rangeInputHandler}
            />

            <div className={classes["participants-num"]}>
              {value} Teilnehmer
            </div>
            <div className={classes["participants-num"]}>
              {moderator} Moderator:in + {assistant} Assistenz
            </div>
          </div>
          <div className={classes["back-next-btns-cont"]}>
            <a
              onClick={function () {
                setThirdQuestion(true);
                setFourthQuestion(false);
              }}
              className={classes["back-next-btns"]}
            >
              Zurück
            </a>
            <a
              onClick={function () {
                setModuleChoose(true);
                setFourthQuestion(false);
                product.participants = value;
                product.moderator = moderator;
                product.assistant = assistant;
                product.nutzerinterviews = Number(
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .nutzerinterviews
                );
                product.stakeholderinterviews = Number(
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .stakeholderinterviews
                );
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
              className={classes["back-next-btns"]}
            >
              Weiter
            </a>
          </div>
        </div>
      )}

      {fifthQuestion && (
        <div className={classes.fifthQuestion}>
          <h2>
            DU HAST ES FAST GESCHAFFT, WAS <br />
            MÖCHTEST DU DEINEN KUNDEN NOCH <br />
            BIETEN?
          </h2>
          <div>
            <div className={classes.answers}>
              <div
                onClick={() => {
                  setCatering(!catering);
                  cateringClick();
                }}
                className={classes.answer}
              >
                <div className={classes.img}></div>
                <h5>CATERING</h5>
              </div>
              <div
                onClick={() => {
                  setTeambuilding(!teambuilding);
                  teambuildingClick();
                }}
                className={classes.answer}
              >
                <div className={classes.img}></div>
                <h5>TEAMBUILDING</h5>
              </div>
            </div>
          </div>
          {Boolean(
            JSON.parse(localStorage.getItem("markenentwicklung")).catering
          ) && (
            <div className={classes.catering}>
              <h3>CATERING</h3>
              <ul>
                <li>
                  <img src="images/circle-dot.svg" />
                  Heiss- & Kaltgetränke
                </li>
                <li>
                  <img src="images/circle-dot.svg" />
                  Kekse, Nüsse, Obstschalen
                </li>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .fingerfood
                    )}
                    onChange={handleFingerfoodChange}
                    type="checkbox"
                    id="fingerfood"
                  />
                  <label htmlFor="fingerfood">Fingerfood</label>
                </li>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .kuchen
                    )}
                    onChange={handleKuchenChange}
                    type="checkbox"
                    id="eis-kuchen"
                  />
                  <label htmlFor="eis-kuchen">Eis / kuchen</label>
                </li>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .lunch
                    )}
                    onChange={handleLunchChange}
                    type="checkbox"
                    id="lunch"
                  />
                  <label htmlFor="lunch">Lunch</label>
                </li>
              </ul>
            </div>
          )}

          {Boolean(
            JSON.parse(localStorage.getItem("markenentwicklung")).teambuilding
          ) && (
            <div className={classes.teambuilding}>
              <h3>TEAMBUILDING</h3>
              <ul>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .scrumKitchen
                    )}
                    onChange={handleScrumKitchenChange}
                    type="checkbox"
                    id="kitchen"
                  />
                  <label htmlFor="kitchen">Scrum Kitchen</label>
                </li>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .drinks
                    )}
                    onChange={handleDrinksChange}
                    type="checkbox"
                    id="afterwork-drinks"
                  />
                  <label htmlFor="afterwork-drinks">Afterwork Drinks</label>
                </li>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .dachterasse
                    )}
                    onChange={handleDachterasseChange}
                    type="checkbox"
                    id="afterwork-dachterasse"
                  />
                  <label htmlFor="afterwork-dachterasse">
                    Afterwork Dachterasse (Drinks & Grillen)
                  </label>
                </li>
              </ul>
            </div>
          )}

          <div className={classes["back-next-btns-cont"]}>
            <a
              className={classes["back-next-btns"]}
              onClick={() => {
                setFifthQuestion(false);
                setModuleChoose(true);
              }}
            >
              Zurück
            </a>
            <a
              className={classes["back-next-btns"]}
              onClick={() => {
                setFifthQuestion(false);
                setOverview(true);
              }}
            >
              Weiter
            </a>
          </div>
        </div>
      )}

      {moduleChoose && (
        <div className={classes["module-choose"]}>
          <h2>WELCHE MODULE MÖCHTEST DU AUSWÄHLEN?</h2>
          <div>
            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Allgemeine Leistungen zur Vorbereitung
            </div>
            <ul>
              <li  className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Initiales Kick-off Meeting
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li  className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li  className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Erstellung Agenda
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Raumbuchung & -vorbereitung
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Materialvorbereitung
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Anlegen Miro-Board
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>
            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Audit
            </div>
            <ul>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Wettbewerbsanalyse<div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Trend- und Benchmarkanalyse<div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Zielgruppenanalyse<div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>
            <ul>
              <li className={classes["on-hover"]}>
                <select
                  value={
                    Number(
                      JSON.parse(localStorage.getItem("markenentwicklung"))
                        .nutzerinterviews
                    )
                      ? Number(
                          JSON.parse(localStorage.getItem("markenentwicklung"))
                            .nutzerinterviews
                        )
                      : 3
                  }
                  onChange={handleNutzerinterviewsChange}
                >
                  <option value={3}>3 Nutzerinterviews</option>
                  <option value={5}>5 Nutzerinterviews</option>
                  <option value={10}>10 Nutzerinterviews</option>
                </select>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <select
                  value={Number(
                    JSON.parse(localStorage.getItem("markenentwicklung"))
                      .stakeholderinterviews
                  )}
                  onChange={handleStakeholderinterviewsChange}
                >
                  <option value={3}>3 Stakeholderinterviews</option>
                  <option value={5}>5 Stakeholderinterviews </option>
                  <option value={10}>10 Stakeholderinterviews</option>
                </select>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("markenentwicklung"))
                      .designAudit
                  )}
                  onChange={handleDesignAuditChange}
                  type="checkbox"
                  id="mitarbeiterprofile"
                />
                <label htmlFor="mitarbeiterprofile">Design Audit</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("markenentwicklung"))
                      .kommunikationsanalyse
                  )}
                  onChange={handleKommunikationsanalyseChange}
                  type="checkbox"
                  id="impulsvortrag"
                />
                <label htmlFor="impulsvortrag">Kommunikationsanalyse</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>
            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Markenentwicklung
            </div>
            <ul>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Mission, Vision, Purpose
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Markenmodell
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Markenkern
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Markenwerte
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Positionierung
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Brand Story
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>
            <ul>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("markenentwicklung"))
                      .markenarchitektur
                  )}
                  onChange={handleMarkenarchitekturChange}
                  type="checkbox"
                  id="impulsvortra"
                />
                <label htmlFor="impulsvortra">Markenarchitektur</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("markenentwicklung"))
                      .produktportfolio
                  )}
                  onChange={handleProduktportfolioChange}
                  type="checkbox"
                  id="suchfelde"
                />
                <label htmlFor="suchfelde">Produktportfolio</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("markenentwicklung"))
                      .impulsvortrag
                  )}
                  onChange={handleImpulsvortragChange}
                  type="checkbox"
                  id="suchfeld"
                />
                <label htmlFor="suchfeld">Impulsvortrag</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>

            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Allgemeine Leistungen Nachbereitung/ Dokumentation
            </div>
            <ul>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Aufbereitung & Verdichtung WS-Ergebnisse
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Handlungsempfehlungen
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Fazit & Next Steps
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Gemeinsame Durchsprache der Ergebnisse via ViKo
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />1 Korrekturschleife /
                Einarbeitung Feedback
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Bereitstellung der Daten
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                WO werden die Daten bereitgestellt
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" /> Medium --&#62; Foto
                dokumentation / PP-Präsenation
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>

            <div className={classes["next-btn"]}>
              <a
                onClick={() => {
                  setFifthQuestion(true);
                  setModuleChoose(false);
                }}
                className={classes["back-next-btns"]}
              >
                Weiter
              </a>
            </div>
          </div>
        </div>
      )}

      {overview && (
        <div className={classes["overview-comp"]}>
          <h2>ÜBERSICHT DER AUSGEWÄHLTEN ELEMENTE:</h2>
          <div>
            {/* <div>Vorbereitung:</div>
         <ul>
           <li>Sichtung Material</li>
           <li>Agenda</li>
           <li>Raumvorbereitung (Grundriss Workshopraum)</li>
           <li>
             Materialvorbereiung (Ausdrucke, Timeline, Namenfelder, Templates)
           </li>
         </ul>
         <div>Dokumentation:</div>
         <ul>
           <li>Aufbereitung der WS Ergebnisse</li>
           <li>Handlungsempfehlungen</li>
           <li>Fazit & Next Steps</li>
           <li>Gemeinsame Durchsprache der Dokumentation in ViKo</li>
           <li>ggf. Anpassungen</li>
         </ul>
         <div>Markenworkshop:</div>
         <ul>
           <li>Vision & Mission</li>
           <li>Wettbewerbsanalyse</li>
           <li>Kundenprofile</li>
           <li>Rahmenprogram</li>
         </ul> */}

            <div>Audit</div>
            <ul>
              <li>Wettbewerbsanalyse</li>
              <li>Trend- und Benchmarkanalyse</li>
              <li>Zielgruppenanalyse</li>
            </ul>
            <ul>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .nutzerinterviews
                }{" "}
                Nutzerinterviews
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .stakeholderinterviews
                }{" "}
                Stakeholderinterviews
              </li>
              {JSON.parse(localStorage.getItem("markenentwicklung"))
                .designAudit && <li>Design Audit</li>}
              {JSON.parse(localStorage.getItem("markenentwicklung"))
                .kommunikationsanalyse && <li>Kommunikationsanalyse</li>}
            </ul>
            <div>Workshop</div>
            <ul>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .workshopType
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .workshopPlace
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .participants
                }{" "}
                Participants
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .moderator
                }{" "}
                Moderator
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("markenentwicklung"))
                    .assistant
                }{" "}
                Assistant
              </li>
            </ul>
            <div>Markenentwicklung</div>
            <ul>
              <li>Mission, Vision,Purpose</li>
              <li>Markenmodell</li>
              <li>Markenkern</li>
              <li>Markenwerte</li>
              <li>Positionierung</li>
              <li>Brand Story</li>
            </ul>
            <ul>
              {JSON.parse(localStorage.getItem("markenentwicklung"))
                .markenarchitektur && <li>Markenarchitektur</li>}
              {JSON.parse(localStorage.getItem("markenentwicklung"))
                .produktportfolio && <li>Produktportfolio</li>}
              {JSON.parse(localStorage.getItem("markenentwicklung"))
                .impulsvortrag && <li>Impulsvortrag</li>}
            </ul>
            {JSON.parse(localStorage.getItem("markenentwicklung")).catering && (
              <div>
                <div>Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </div>
            )}
            {JSON.parse(localStorage.getItem("markenentwicklung"))
              .teambuilding && (
              <div>
                <div>Teambuilding</div>
                <ul>
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .scrumKitchen && <li>Scrum Kitchen</li>}
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .drinks && <li>Afterwork Drinks</li>}
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .dachterasse && (
                    <li>Afterwork Dachterasse (Drinks & Grillen)</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className={classes["back-next-btns-cont"]}>
            <a
              className={classes["back-next-btns"]}
              onClick={() => {
                setOverview(false);
                setFifthQuestion(true);
              }}
            >
              Zurück
            </a>
            <a
              className={classes["back-next-btns"]}
              onClick={() => {
                setAddCartModal(true);
                product.isInCart = true;
                localStorage.setItem(
                  "markenentwicklung",
                  JSON.stringify(product)
                );
              }}
            >
              zum Warenkorb hinzufügen
            </a>
          </div>
        </div>
      )}

      {addCartModal && (
        <div className={classes["add-cart-modal"]}>
          <div className={classes.modal}>
            <div className={classes["close-modal"]}>
              <span
                onClick={() => {
                  setAddCartModal(false);
                }}
              >
                X
              </span>
            </div>
            <h2>
              Fantastisch! <br />
              Workshop liegt nun im Warenkorb <br />
              Was steht nun an?
            </h2>
            <div className={classes["back-next-btns-cont"]}>
              <Link
                to="/products"
                className={classes["back-next-btns"]}
                onClick={() => {
                  setOverview(false);
                }}
              >
                Weitere Produkte hinzufügen
              </Link>
              <a
                className={classes["back-next-btns"]}
                onClick={() => {
                  setAddCartModal(true);
                }}
              >
                Zum Warenkorb
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Markenentwicklung;
