import { useState } from "react";

import classes from "./ProductComp.module.css";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";

const CorporateDesign = () => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("corporateDesign"))
  );

  const [firstQuestion, setFirstQuestion] = useState(true);
  const [secondQuestion, setSecondQuestion] = useState(false);
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

  const [brandBook, setBrandBook] = useState(true);

  const [fingerfood, setFingerfood] = useState(true);
  const [kuchen, setKuchen] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [scrumKitchen, setScrumKitchen] = useState(true);
  const [drinks, setDrinks] = useState(true);
  const [dachterasse, setDachterasse] = useState(true);

  const handleBrandBookChange = () => {
    setBrandBook(!brandBook);
    product.brandBook = brandBook;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (brandBook) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 200;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 200;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  function yesClick() {
    setFirstQuestion(false);
    setSecondQuestion(true);
    product.workshop = true;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
  }

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
            JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
          ) + 1000;
        localStorage.setItem("corporateDesign", JSON.stringify(product));
      }
      if (changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
          ) - 1000;
        localStorage.setItem("corporateDesign", JSON.stringify(product));
      }
      setChangeInputfrom25(false);
      setChangeInputfrom13(true);
    } else if (Number(event.target.value) < 13) {
      product.moneyAmount = Number(
        JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
      );
      if (changeInputfrom13) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
          ) - 1000;
        localStorage.setItem("corporateDesign", JSON.stringify(product));
      }
      setChangeInputfrom13(false);
    } else if (Number(event.target.value) >= 25) {
      if (!changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
          ) + 1000;
        localStorage.setItem("corporateDesign", JSON.stringify(product));
      }
      setChangeInputfrom25(true);
    }

    localStorage.setItem("corporateDesign", JSON.stringify(product));
  };

  const cateringClick = () => {
    if (!catering) {
      product.catering = true;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 90;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.catering = false;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 90;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const teambuildingClick = () => {
    if (!teambuilding) {
      product.teambuilding = true;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.teambuilding = false;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const handleFingerfoodChange = () => {
    setFingerfood(!fingerfood);
    product.fingerfood = fingerfood;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (fingerfood) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 30;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 30;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const handleKuchenChange = () => {
    setKuchen(!kuchen);
    product.kuchen = kuchen;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (kuchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 30;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 30;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const handleLunchChange = () => {
    setLunch(!lunch);
    product.lunch = lunch;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (lunch) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 90;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 90;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const handleScrumKitchenChange = () => {
    setScrumKitchen(!scrumKitchen);
    product.scrumKitchen = scrumKitchen;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (scrumKitchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 120;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 120;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const handleDrinksChange = () => {
    setDrinks(!drinks);
    product.drinks = drinks;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (drinks) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 30;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 30;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  const handleDachterasseChange = () => {
    setDachterasse(!dachterasse);
    product.dachterasse = dachterasse;
    localStorage.setItem("corporateDesign", JSON.stringify(product));
    if (dachterasse) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) + 45;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount
        ) - 45;
      localStorage.setItem("corporateDesign", JSON.stringify(product));
    }
  };

  return (
    <div className={classes["product-page"]}>
      <HeaderComponent />
      {
        <div className={classes["money-amount"]}>
          {" "}
          TOTAL:{" "}
          {JSON.parse(localStorage.getItem("corporateDesign")).moneyAmount}€
        </div>
      }

      {firstQuestion && (
        <div className={classes.firstQuestion}>
          <h2>Would you like to have a workshop?</h2>
          <div className={classes.answers}>
            <div
              className={classes.answer}
              onClick={() => {
                yesClick();
              }}
            >
              YES
            </div>
            <div
              className={classes.answer}
              onClick={() => {
                product.workshop = false;
                setFirstQuestion(false);
                setModuleChoose(true);
                localStorage.setItem(
                  "corporateDesign",
                  JSON.stringify(product)
                );
              }}
            >
              NO
            </div>
          </div>
        </div>
      )}

      {secondQuestion && (
        <div className={classes.secondQuestion}>
          <h2>WÄHLE DIE ART DES WORKSHOPS</h2>
          <div className={classes.answers}>
            <div
              className={classes.answer}
              onClick={() => {
                product.workshopType = "digital";
                localStorage.setItem(
                  "corporateDesign",
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
                  "corporateDesign",
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
                  "corporateDesign",
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
                  "corporateDesign",
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
                  "corporateDesign",
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
                  "corporateDesign",
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
                  "corporateDesign",
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
            JSON.parse(localStorage.getItem("corporateDesign")).catering
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
                      JSON.parse(localStorage.getItem("corporateDesign"))
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
                      JSON.parse(localStorage.getItem("corporateDesign")).kuchen
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
                      JSON.parse(localStorage.getItem("corporateDesign")).lunch
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
            JSON.parse(localStorage.getItem("corporateDesign")).teambuilding
          ) && (
            <div className={classes.teambuilding}>
              <h3>TEAMBUILDING</h3>
              <ul>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("corporateDesign"))
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
                      JSON.parse(localStorage.getItem("corporateDesign")).drinks
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
                      JSON.parse(localStorage.getItem("corporateDesign"))
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
                Trend- und Benchmarkanalyse
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Design Audit
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
            </ul>
            <div className={classes["module-title"]}>
              <img className={classes["minus-icon"]} src="images/minus.svg" />
              Konzeot
            </div>
            <ul>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Creative Session
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Visual Metaphors
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Abgleich Markenwerte & Brandfit
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Moodboard (digital/analog): Bildsprache / Bildwelten
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />3 Design Routen
                (Moodbards/Skizze)
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Ausarbeitung 1 Route CI Logo, Design elemente, Typo,
                Bildsprache, Anwendungen
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("corporateDesign"))
                      .brandBook
                  )}
                  onChange={handleBrandBookChange}
                  type="checkbox"
                  id="suchfelde"
                />
                <label htmlFor="suchfelde">Überführung in Brand Book</label>
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
              <li>Trend- und Benchmarkanalyse</li>
              <li>Design Audit</li>
            </ul>

            <div>Konzeot</div>
            <ul>
              <li>Creative Session</li>
              <li>Visual Metaphors</li>
              <li>Abgleich Markenwerte & Brandfit</li>
              <li>Moodboard (digital/analog): Bildsprache / Bildwelten</li>
              <li>3 Design Routen (Moodbards/Skizze)</li>
              <li>
                Ausarbeitung 1 Route CI Logo, Design elemente, Typo,
                Bildsprache, Anwendungen
              </li>
              {JSON.parse(localStorage.getItem("corporateDesign"))
                .brandBook && <li>Überführung in Brand Book</li>}
            </ul>

            <div>Workshop</div>
            <ul>
              <li>
                {
                  JSON.parse(localStorage.getItem("corporateDesign"))
                    .workshopType
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("corporateDesign"))
                    .workshopPlace
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("corporateDesign"))
                    .participants
                }{" "}
                Participants
              </li>
              <li>
                {JSON.parse(localStorage.getItem("corporateDesign")).moderator}{" "}
                Moderator
              </li>
              <li>
                {JSON.parse(localStorage.getItem("corporateDesign")).assistant}{" "}
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

            {JSON.parse(localStorage.getItem("corporateDesign")).catering && (
              <div>
                <div>Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("corporateDesign"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("corporateDesign"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("corporateDesign"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </div>
            )}
            {JSON.parse(localStorage.getItem("corporateDesign"))
              .teambuilding && (
              <div>
                <div>Teambuilding</div>
                <ul>
                  {JSON.parse(localStorage.getItem("corporateDesign"))
                    .scrumKitchen && <li>Scrum Kitchen</li>}
                  {JSON.parse(localStorage.getItem("corporateDesign"))
                    .drinks && <li>Afterwork Drinks</li>}
                  {JSON.parse(localStorage.getItem("corporateDesign"))
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
                  "corporateDesign",
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

export default CorporateDesign;
