import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import "./BasketOfGoods.css";
import HeaderComponent from "../HeaderComponent";
import { useRef, useState } from "react";

const BasketOfGoods = (items) => {
  const [data, setData] = useState({
    companyAddress: "",
    ansprechspartner: "",
    clientAddress: "",
    date: "",
    angebot: "",
    companyZip: "",
    stuff: "",
    introText: "",
    projektbeschreibung: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(data);
  };
  console.log(data, "dataHere");
  const markenentwicklungData = JSON.parse(localStorage.getItem("markenentwicklung"));
  const omnichannelKonzept = JSON.parse(localStorage.getItem("omnichannelKonzept"));
  const corporateDesign = JSON.parse(localStorage.getItem("corporateDesign"));
  const brandingKonzept = JSON.parse(localStorage.getItem("brandingKonzept"));
  const naming = JSON.parse(localStorage.getItem("naming"));
  // console.log({...localData, ...data}, "concatHere");

  return (
    <div>
      <HeaderComponent />
      <div className="pdf-container">
        <div className="company-details">
          <div className="client-details">
            <div className="client-details-inputs">
              <div className="danshop-location">
                dan pearlman Markenarchitektur | Kiefholzstraße 1 | 12435 Berlin
              </div>
              <input
                className="client-default-input"
                type="text"
                placeholder="Company Name"
                value={data.companyAddress}
                onChange={handleChange}
                name="companyAddress"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Ansprechspartner"
                value={data.ansprechspartner}
                onChange={handleChange}
                name="ansprechspartner"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Client Address"
                value={data.clientAddress}
                onChange={handleChange}
                name="clientAddress"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Ort / Date"
                value={data.date}
                onChange={handleChange}
                name="date"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Client ZIP"
                value={data.companyZip}
                onChange={handleChange}
                name="companyZip"
              ></input>
            </div>
            <div className="client-details-inputs">
              <input
                className="client-default-input"
                type="text"
                placeholder="Angebot #"
                onChange={handleChange}
                name="angebot"
              ></input>
              <input
                className="client-default-input"
                type="text"
                placeholder="Kunde | Projekt | Leistung"
                onChange={handleChange}
                name="stuff"
              ></input>
            </div>
          </div>
          <div className="danshop-details">
            <p>
              dan pearlman Markenarchitektur Gesellschaft von Architekten und
              Innenarchitekten mbH
              <br />
              <br />
              Kiefholzstraße 1
              <br />
              12435 Berlin
              <br />
              <br />
              T: +49 (0) 30 53 00 05 60
              <br />
              F: +49 (0) 30 53 00 05 88
              <br />
              <br />
              office@danpearlman.com
              <br />
              www.danpearlman.com
              <br />
              <br />
              Geschäftsführer:
              <br />
              Nicole Srock.Stanley
              <br />
              Dr. Stephan Linsner
              <br />
              <br />
              HRB 74005
              <br />
              Amtsgericht Berlin-Charlottenburg
              <br />
              Ust-Idnr. DE207541440
              <br />
              <br />
              dma_lac_21001-A
            </p>
          </div>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Intro Text:</p>
          <textarea
            className="default-text-input"
            type="text"
            value={data.introText}
            onChange={handleChange}
            name="introText"
          ></textarea>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Projektbeschreibung:</p>
          <textarea
            className="default-text-input"
            type="text"
            value={data.projektbeschreibung}
            onChange={handleChange}
            name="projektbeschreibung"
          ></textarea>
        </div>

        <div className="default-text-container">
          <p className="default-text-title">Ziel des Auftrags:</p>
          <textarea className="default-text-input" type="text"></textarea>
        </div>



        <PDFDownloadLink className="generate-pdf-btn"
          document={<PDFDocument data={ data } />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Generate PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

const markenentwicklungData = JSON.parse(localStorage.getItem("markenentwicklung"));
const omnichannelKonzept = JSON.parse(localStorage.getItem("omnichannelKonzept"));
const corporateDesign = JSON.parse(localStorage.getItem("corporateDesign"));
const brandingKonzept = JSON.parse(localStorage.getItem("brandingKonzept"));
const naming = JSON.parse(localStorage.getItem("naming"));

export default BasketOfGoods;


