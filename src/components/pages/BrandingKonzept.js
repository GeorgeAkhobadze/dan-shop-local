import { useState } from "react";

import classes from "./ProductComp.module.css";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";

const BrandingKonzept = () => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("brandingKonzept"))
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

  const [value, setValue] = useState(1);
  const [moderator, setModerator] = useState(1);
  const [assistant, setAssistant] = useState(1);

  const [impulsvortrag, setImpulsvortrag] = useState(true);
  const [purposeVision, setPurposeVision] = useState(true);
  const [workspaceKonzept, setWorkspaceKonzept] = useState(true);
  const [brandStory, setBrandStory] = useState(true);

  const [fingerfood, setFingerfood] = useState(true);
  const [kuchen, setKuchen] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [scrumKitchen, setScrumKitchen] = useState(true);
  const [drinks, setDrinks] = useState(true);
  const [dachterasse, setDachterasse] = useState(true);

  const handleImpulsvortragChange = () => {
    setImpulsvortrag(!impulsvortrag);
    product.impulsvortrag = impulsvortrag;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (impulsvortrag) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };
  const handlePurposeVisionChange = () => {
    setPurposeVision(!purposeVision);
    product.purposeVision = purposeVision;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (purposeVision) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleBrandStoryChange = () => {
    setBrandStory(!brandStory);
    product.brandStory = brandStory;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (brandStory) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };
  const handleWorkspaceKonzeptChange = () => {
    setWorkspaceKonzept(!workspaceKonzept);
    product.workspaceKonzept = workspaceKonzept;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (workspaceKonzept) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
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
            JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
          ) + 1000;
        localStorage.setItem("brandingKonzept", JSON.stringify(product));
      }
      if (changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
          ) - 1000;
        localStorage.setItem("brandingKonzept", JSON.stringify(product));
      }
      setChangeInputfrom25(false);
      setChangeInputfrom13(true);
    } else if (Number(event.target.value) < 13) {
      product.moneyAmount = Number(
        JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
      );
      if (changeInputfrom13) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
          ) - 1000;
        localStorage.setItem("brandingKonzept", JSON.stringify(product));
      }
      setChangeInputfrom13(false);
    } else if (Number(event.target.value) >= 25) {
      if (!changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
          ) + 1000;
        localStorage.setItem("brandingKonzept", JSON.stringify(product));
      }
      setChangeInputfrom25(true);
    }

    localStorage.setItem("brandingKonzept", JSON.stringify(product));
  };

  const cateringClick = () => {
    if (!catering) {
      product.catering = true;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 90;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.catering = false;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 90;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const teambuildingClick = () => {
    if (!teambuilding) {
      product.teambuilding = true;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.teambuilding = false;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleFingerfoodChange = () => {
    setFingerfood(!fingerfood);
    product.fingerfood = fingerfood;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (fingerfood) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 30;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 30;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleKuchenChange = () => {
    setKuchen(!kuchen);
    product.kuchen = kuchen;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (kuchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 30;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 30;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleLunchChange = () => {
    setLunch(!lunch);
    product.lunch = lunch;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (lunch) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 90;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 90;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleScrumKitchenChange = () => {
    setScrumKitchen(!scrumKitchen);
    product.scrumKitchen = scrumKitchen;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (scrumKitchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 120;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 120;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleDrinksChange = () => {
    setDrinks(!drinks);
    product.drinks = drinks;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (drinks) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 30;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 30;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  const handleDachterasseChange = () => {
    setDachterasse(!dachterasse);
    product.dachterasse = dachterasse;
    localStorage.setItem("brandingKonzept", JSON.stringify(product));
    if (dachterasse) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) + 45;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount
        ) - 45;
      localStorage.setItem("brandingKonzept", JSON.stringify(product));
    }
  };

  return (
    <div className={classes["product-page"]}>
      <HeaderComponent />
      {
        <div className={classes["money-amount"]}>
          {" "}
          TOTAL:{" "}
          {JSON.parse(localStorage.getItem("brandingKonzept")).moneyAmount}€
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
                  "brandingKonzept",
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
                  "brandingKonzept",
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
                  "brandingKonzept",
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
                  "brandingKonzept",
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
                  "brandingKonzept",
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
                  "brandingKonzept",
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
                localStorage.setItem(
                  "brandingKonzept",
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
            JSON.parse(localStorage.getItem("brandingKonzept")).catering
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
                      JSON.parse(localStorage.getItem("brandingKonzept"))
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
                      JSON.parse(localStorage.getItem("brandingKonzept")).kuchen
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
                      JSON.parse(localStorage.getItem("brandingKonzept")).lunch
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
            JSON.parse(localStorage.getItem("brandingKonzept")).teambuilding
          ) && (
            <div className={classes.teambuilding}>
              <h3>TEAMBUILDING</h3>
              <ul>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("brandingKonzept"))
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
                      JSON.parse(localStorage.getItem("brandingKonzept")).drinks
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
                      JSON.parse(localStorage.getItem("brandingKonzept"))
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
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Initiales Kick-off Meeting
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
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
                Marke & Positionierung
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Zielgruppenanalyse Employee Audit
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Trend- und Benchmarkanalyse
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>
            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Creation
            </div>
            <ul>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Interne Werte-Definition
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Talent Journey
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Persona & Bedürfnisse
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("brandingKonzept"))
                      .impulsvortrag
                  )}
                  onChange={handleImpulsvortragChange}
                  type="checkbox"
                  id="suchfelde"
                />
                <label htmlFor="suchfelde">Impulsvortrag</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("brandingKonzept"))
                      .purposeVision
                  )}
                  onChange={handlePurposeVisionChange}
                  type="checkbox"
                  id="suchfeld"
                />
                <label htmlFor="suchfeld">
                  Purpose Vision & Mission Entwicklung
                </label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>

            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Konzept
            </div>
            <ul>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Werte-Aktivierung Employee Branding Kampagne
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Hyrbid Employee Experience
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Organisations & Führungsverständnis
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("brandingKonzept"))
                      .workspaceKonzept
                  )}
                  onChange={handleWorkspaceKonzeptChange}
                  type="checkbox"
                  id="such"
                />
                <label htmlFor="such">New Work Space Konzept</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("brandingKonzept"))
                      .brandStory
                  )}
                  onChange={handleBrandStoryChange}
                  type="checkbox"
                  id="suc"
                />
                <label htmlFor="suc">Internal Brand Story</label>
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
            <div>Allgemeine Leistungen zur Vorbereitung</div>
            <ul>
              <li>Initiales Kick-off Meeting</li>
              <li>Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage</li>
              <li>Erstellung Agenda</li>
              <li>Raumbuchung & -vorbereitung</li>
              <li>Materialvorbereitung</li>
              <li>Anlegen Miro-Board</li>
            </ul>

            <div>Audit</div>
            <ul>
              <li>Marke & Positionierung</li>
              <li>Zielgruppenanalyse Employee Audit</li>
              <li>Trend- und Benchmarkanalyse</li>
            </ul>

            <div>Creation</div>
            <ul>
              <li>Interne Werte-Definition</li>
              <li>Talent Journey</li>
              <li>Persona & Bedürfnisse</li>
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .impulsvortrag && <li>Impulsvortrag</li>}
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .purposeVision && <li>Purpose Vision & Mission Entwicklung</li>}
            </ul>

            <div>Konzept</div>
            <ul>
              <li>Werte-Aktivierung Employee Branding Kampagne</li>
              <li>Hyrbid Employee Experience</li>
              <li>Organisations & Führungsverständnis</li>
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .workspaceKonzept && <li>New Work Space Konzept</li>}
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .brandStory && <li>Internal Brand Story</li>}
            </ul>

            <div>Workshop</div>
            <ul>
              <li>
                {
                  JSON.parse(localStorage.getItem("brandingKonzept"))
                    .workshopType
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("brandingKonzept"))
                    .workshopPlace
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("brandingKonzept"))
                    .participants
                }{" "}
                Participants
              </li>
              <li>
                {JSON.parse(localStorage.getItem("brandingKonzept")).moderator}{" "}
                Moderator
              </li>
              <li>
                {JSON.parse(localStorage.getItem("brandingKonzept")).assistant}{" "}
                Assistant
              </li>
            </ul>

            <div> Allgemeine Leistungen Nachbereitung/ Dokumentation </div>
            <ul>
              <li>Aufbereitung & Verdichtung WS-Ergebnisse</li>
              <li>Handlungsempfehlungen</li>
              <li>Fazit & Next Steps</li>
              <li>Gemeinsame Durchsprache der Ergebnisse via ViKo</li>
              <li>1 Korrekturschleife / Einarbeitung Feedback</li>
              <li>Bereitstellung der Daten</li>
              <li>WO werden die Daten bereitgestellt</li>
              <li>Medium --&#62; Foto dokumentation / PP-Präsenation</li>
            </ul>

            {JSON.parse(localStorage.getItem("brandingKonzept")).catering && (
              <div>
                <div>Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </div>
            )}
            {JSON.parse(localStorage.getItem("brandingKonzept"))
              .teambuilding && (
              <div>
                <div>Teambuilding</div>
                <ul>
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .scrumKitchen && <li>Scrum Kitchen</li>}
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .drinks && <li>Afterwork Drinks</li>}
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
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
                  "brandingKonzept",
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

export default BrandingKonzept;
