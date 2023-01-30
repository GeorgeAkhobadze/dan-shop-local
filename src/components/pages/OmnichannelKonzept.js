import { useState } from "react";

import classes from "./ProductComp.module.css";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";

const OmnichannelKonzept = () => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("omnichannelKonzept"))
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

  const [architectualAudit, setArchitectualAudit] = useState(true);
  const [identifikationHandlungsfelder, setIdentifikationHandlungsfelder] =
    useState(true);
  const [modell3D, setModell3D] = useState(true);
  const [text, setText] = useState(true);
  const [brandStory, setBrandStory] = useState(true);
  const [impulsvortrag, setImpulsvortrag] = useState(true);

  const [zusatzliche3D, setZusatzliche3D] = useState(true);
  const [walkThroughVideo, setWalkThroughVideo] = useState(true);
  const [enstellung2D, setEnstellung2D] = useState(true);
  const [koordination, setKoordination] = useState(true);
  const [abstimmung, setAbstimmung] = useState(true);
  const [beleuchtungskonzept, setBeleuchtungskonzept] = useState(true);
  const [kommunikationskonzept, setKommunikationskonzept] = useState(true);
  const [grobkostenschatzung, setGrobkostenschatzung] = useState(true);

  const [fingerfood, setFingerfood] = useState(true);
  const [kuchen, setKuchen] = useState(true);
  const [lunch, setLunch] = useState(true);
  const [scrumKitchen, setScrumKitchen] = useState(true);
  const [drinks, setDrinks] = useState(true);
  const [dachterasse, setDachterasse] = useState(true);

  const handleIdentifikationHandlungsfelderChange = () => {
    setIdentifikationHandlungsfelder(!identifikationHandlungsfelder);
    product.identifikationHandlungsfelder = identifikationHandlungsfelder;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (identifikationHandlungsfelder) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };
  const handleArchitectualAuditChange = () => {
    setArchitectualAudit(!architectualAudit);
    product.architectualAudit = architectualAudit;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (architectualAudit) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleModell3DChange = () => {
    setModell3D(!modell3D);
    product.modell3D = modell3D;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (modell3D) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleTextChange = () => {
    setText(!text);
    product.text = text;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (text) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handlebrandStoryChange = () => {
    setBrandStory(!brandStory);
    product.brandStory = brandStory;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (brandStory) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleImpulsvortragChange = () => {
    setImpulsvortrag(!impulsvortrag);
    product.impulsvortrag = impulsvortrag;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (impulsvortrag) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleZusatzliche3DChange = () => {
    setZusatzliche3D(!zusatzliche3D);
    product.zusatzliche3D = zusatzliche3D;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (zusatzliche3D) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleWalkThroughVideoChange = () => {
    setWalkThroughVideo(!walkThroughVideo);
    product.walkThroughVideo = walkThroughVideo;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (walkThroughVideo) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleEnstellung2DChange = () => {
    setEnstellung2D(!enstellung2D);
    product.enstellung2D = enstellung2D;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (enstellung2D) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleKoordinationChange = () => {
    setKoordination(!koordination);
    product.koordination = koordination;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (koordination) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleAbstimmungChange = () => {
    setAbstimmung(!abstimmung);
    product.abstimmung = abstimmung;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (abstimmung) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleBeleuchtungskonzeptChange = () => {
    setBeleuchtungskonzept(!beleuchtungskonzept);
    product.beleuchtungskonzept = beleuchtungskonzept;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (beleuchtungskonzept) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleKommunikationskonzeptChange = () => {
    setKommunikationskonzept(!kommunikationskonzept);
    product.kommunikationskonzept = kommunikationskonzept;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (kommunikationskonzept) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleGrobkostenschatzungChange = () => {
    setGrobkostenschatzung(!grobkostenschatzung);
    product.grobkostenschatzung = grobkostenschatzung;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (grobkostenschatzung) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 200;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
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
            JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
          ) + 1000;
        localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
      }
      if (changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
          ) - 1000;
        localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
      }
      setChangeInputfrom25(false);
      setChangeInputfrom13(true);
    } else if (Number(event.target.value) < 13) {
      product.moneyAmount = Number(
        JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
      );
      if (changeInputfrom13) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
          ) - 1000;
        localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
      }
      setChangeInputfrom13(false);
    } else if (Number(event.target.value) >= 25) {
      if (!changeInputfrom25) {
        product.moneyAmount =
          Number(
            JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
          ) + 1000;
        localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
      }
      setChangeInputfrom25(true);
    }

    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
  };

  const cateringClick = () => {
    if (!catering) {
      product.catering = true;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 90;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.catering = false;
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 90;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const teambuildingClick = () => {
    if (!teambuilding) {
      product.teambuilding = true;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.teambuilding = false;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleFingerfoodChange = () => {
    setFingerfood(!fingerfood);
    product.fingerfood = fingerfood;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (fingerfood) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 30;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 30;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleKuchenChange = () => {
    setKuchen(!kuchen);
    product.kuchen = kuchen;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (kuchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 30;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 30;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleLunchChange = () => {
    setLunch(!lunch);
    product.lunch = lunch;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (lunch) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 90;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 90;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleScrumKitchenChange = () => {
    setScrumKitchen(!scrumKitchen);
    product.scrumKitchen = scrumKitchen;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (scrumKitchen) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 120;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 120;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleDrinksChange = () => {
    setDrinks(!drinks);
    product.drinks = drinks;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (drinks) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 30;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 30;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  const handleDachterasseChange = () => {
    setDachterasse(!dachterasse);
    product.dachterasse = dachterasse;
    localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    if (dachterasse) {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) + 45;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    } else {
      product.moneyAmount =
        Number(
          JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount
        ) - 45;
      localStorage.setItem("omnichannelKonzept", JSON.stringify(product));
    }
  };

  return (
    <div className={classes["product-page"]}>
      <HeaderComponent />
      {
        <div className={classes["money-amount"]}>
          {" "}
          TOTAL:{" "}
          {JSON.parse(localStorage.getItem("omnichannelKonzept")).moneyAmount}€
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
                  "omnichannelKonzept",
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
                  "omnichannelKonzept",
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
                  "omnichannelKonzept",
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
                  "omnichannelKonzept",
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
                  "omnichannelKonzept",
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
                  "omnichannelKonzept",
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
                  "omnichannelKonzept",
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
            JSON.parse(localStorage.getItem("omnichannelKonzept")).catering
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
                      JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
                      JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
                      JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
            JSON.parse(localStorage.getItem("omnichannelKonzept")).teambuilding
          ) && (
            <div className={classes.teambuilding}>
              <h3>TEAMBUILDING</h3>
              <ul>
                <li>
                  <input
                    checked={Boolean(
                      JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
                      JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
                      JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
                Grundlagenermitlung (Quick Check)
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
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Zielgruppenanalyse
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .architectualAudit
                  )}
                  onChange={handleArchitectualAuditChange}
                  type="checkbox"
                  id="suchfelde"
                />
                <label htmlFor="suchfelde">Architectual Audit (Fotodoku)</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .identifikationHandlungsfelder
                  )}
                  onChange={handleIdentifikationHandlungsfelderChange}
                  type="checkbox"
                  id="suchfeld"
                />
                <label htmlFor="suchfeld">Identifikation Handlungsfelder</label>
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
                easd
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Opportunity Mapping
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Persona & Bedürfnisse Nutzer & Serviceanalyse
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Moodboard (digital)
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Identifikation von Schnittstellen
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />2 Design Routen
                (Moodbards/Skizze)
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Touchpoint Konzept (Digital / Hybrid / Analog)
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Retail Innovation Playbook
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .modell3D
                  )}
                  onChange={handleModell3DChange}
                  type="checkbox"
                  id="such"
                />
                <label htmlFor="such">
                  Erstellung 3D Modell + 3D Visualisierungen
                </label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept")).text
                  )}
                  onChange={handleTextChange}
                  type="checkbox"
                  id="suchf"
                />
                <label htmlFor="suchf">Text</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .brandStory
                  )}
                  onChange={handlebrandStoryChange}
                  type="checkbox"
                  id="suchfe"
                />
                <label htmlFor="suchfe">Brand Story</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .impulsvortrag
                  )}
                  onChange={handleImpulsvortragChange}
                  type="checkbox"
                  id="suc"
                />
                <label htmlFor="suc">Impulsvortrag</label>
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
                Erarbeitung einer Design Route (3-4 Visualisierung)
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Grundriss
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Moodboard (analog)
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Zukaufmöbel
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <img src="images/circle-dot.svg" />
                Entwicklung Mittelraummöbel
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .zusatzliche3D
                  )}
                  onChange={handleZusatzliche3DChange}
                  type="checkbox"
                  id="such1"
                />
                <label htmlFor="such1">Zusätzliche 3D Visualisierung</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .walkThroughVideo
                  )}
                  onChange={handleWalkThroughVideoChange}
                  type="checkbox"
                  id="suchf11"
                />
                <label htmlFor="suchf11">Walk-through Video (Enscape)</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .enstellung2D
                  )}
                  onChange={handleEnstellung2DChange}
                  type="checkbox"
                  id="suchfe1"
                />
                <label htmlFor="suchfe1">
                  Erstellung 2D Ansichten (Wandabwicklung| Fassade)
                </label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .koordination
                  )}
                  onChange={handleKoordinationChange}
                  type="checkbox"
                  id="suc1"
                />
                <label htmlFor="suc1">
                  Koordination & Integration Fachplaner
                </label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .abstimmung
                  )}
                  onChange={handleAbstimmungChange}
                  type="checkbox"
                  id="such11"
                />
                <label htmlFor="such11">
                  Abstimmung mit Dienstleistern Hardware (Screen & Audio)
                </label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .beleuchtungskonzept
                  )}
                  onChange={handleBeleuchtungskonzeptChange}
                  type="checkbox"
                  id="suchf1"
                />
                <label htmlFor="suchf1">
                  Decken- & Beleuchtungskonzept (gestalterisch)
                </label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .kommunikationskonzept
                  )}
                  onChange={handleKommunikationskonzeptChange}
                  type="checkbox"
                  id="suchfe11"
                />
                <label htmlFor="suchfe11">Kommunikationskonzept im Raum</label>
                <div className={classes.hover}>
                Initiales Kick-off Meeting
                </div>
              </li>
              <li className={classes["on-hover"]}>
                <input
                  checked={Boolean(
                    JSON.parse(localStorage.getItem("omnichannelKonzept"))
                      .grobkostenschatzung
                  )}
                  onChange={handleGrobkostenschatzungChange}
                  type="checkbox"
                  id="suc11"
                />
                <label htmlFor="suc11">Grobkostenschätzung</label>
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
              <li>Grundlagenermitlung (Quick Check)</li>
              <li>Trend- und Benchmarkanalyse</li>
              <li>Zielgruppenanalyse</li>
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .architectualAudit && <li>Architectual Audit (Fotodoku)</li>}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .identifikationHandlungsfelder && (
                <li>Identifikation Handlungsfelder</li>
              )}
            </ul>

            <div>Creation</div>
            <ul>
              <li>easd</li>
              <li>Opportunity Mapping</li>
              <li>Persona & Bedürfnisse Nutzer & Serviceanalyse</li>
              <li>Moodboard (digital)</li>
              <li>Identifikation von Schnittstellen</li>
              <li>2 Design Routen (Moodbards/Skizze)</li>
              <li>Touchpoint Konzept (Digital / Hybrid / Analog)</li>
              <li>Retail Innovation Playbook</li>
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .modell3D && (
                <li>Erstellung 3D Modell + 3D Visualisierungen</li>
              )}
              {JSON.parse(localStorage.getItem("omnichannelKonzept")).text && (
                <li>Text</li>
              )}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .brandStory && <li>Brand Story</li>}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .impulsvortrag && <li>Impulsvortrag</li>}
            </ul>

            <div>Konzept</div>
            <ul>
              <li>Erarbeitung einer Design Route (3-4 Visualisierung)</li>
              <li>Grundriss</li>
              <li>Moodboard (analog)</li>
              <li>Zukaufmöbel</li>
              <li>Entwicklung Mittelraummöbel</li>
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .zusatzliche3D && <li>Zusätzliche 3D Visualisierung</li>}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .walkThroughVideo && <li>Walk-through Video (Enscape)</li>}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .enstellung2D && (
                <li>Erstellung 2D Ansichten (Wandabwicklung| Fassade)</li>
              )}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .koordination && <li>Koordination & Integration Fachplaner</li>}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .abstimmung && (
                <li>Abstimmung mit Dienstleistern Hardware (Screen & Audio)</li>
              )}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .beleuchtungskonzept && (
                <li>Decken- & Beleuchtungskonzept (gestalterisch)</li>
              )}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .kommunikationskonzept && (
                <li>Kommunikationskonzept im Raum</li>
              )}
              {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                .grobkostenschatzung && <li>Grobkostenschätzung</li>}
            </ul>

            <div>Workshop</div>
            <ul>
              <li>
                {
                  JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .workshopType
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .workshopPlace
                }
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .participants
                }{" "}
                Participants
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .moderator
                }{" "}
                Moderator
              </li>
              <li>
                {
                  JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .assistant
                }{" "}
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

            {JSON.parse(localStorage.getItem("omnichannelKonzept"))
              .catering && (
              <div>
                <div>Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </div>
            )}
            {JSON.parse(localStorage.getItem("omnichannelKonzept"))
              .teambuilding && (
              <div>
                <div>Teambuilding</div>
                <ul>
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .scrumKitchen && <li>Scrum Kitchen</li>}
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .drinks && <li>Afterwork Drinks</li>}
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
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
                  "omnichannelKonzept",
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

export default OmnichannelKonzept;
