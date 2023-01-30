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

        <div class="service-section">
          {naming != null &&
                  <div className="service-list-container">
            <div className="product-title">{naming.name}</div>
                    
                    <div className="service-title">Allgemeine Leistungen zur Vorbereitung</div>
                    <ul>
                      <li>Initiales Kick-off Meeting</li>
                      <li>Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage</li>
                      <li>Erstellung Agenda</li>
                      <li>Raumbuchung & -vorbereitung</li>
                      <li>Materialvorbereitung</li>
                      <li>Anlegen Miro-Board</li>
                    </ul>
        
                    <div className="service-title">Audit</div>
                    <ul>
                      <li>Marke & Positionierung</li>
                      <li>Zielgruppenanalyse</li>
                    </ul>
        
                    <div className="service-title">Naming (Erarbeitung)</div>
                    <ul>
                      <li>Suchfelder</li>
                      <li>Creative Session</li>
                      <li>Longlist / Shortlist / Favorites</li>
                      <li>Abgleich Markenwerte, Brandfit & Bewertungsmatrix</li>
                      <li>Domainprüfung / Verfügbarkeit</li>
                      <li>Korrekturschleife</li>
                    </ul>
        
                    <div className="service-title">Naming (Bewertung)</div>
                    <ul>
                      <li>Abgleich Markenwerte, Brandfit & Bewertungsmatrix</li>
                      <li>Alternative Szenarien</li>
                    </ul>
        
                    <ul>
                      {JSON.parse(localStorage.getItem("naming")).designRouten && (
                        <li>Design Routen</li>
                      )}
                      {JSON.parse(localStorage.getItem("naming")).corporateIdentity && (
                        <li>Corporate Identity</li>
                      )}
                      {JSON.parse(localStorage.getItem("naming")).rechtlichePrufung && (
                        <li>Rechtliche Prüfung</li>
                      )}
                    </ul>
        
                    <div className="service-title">Workshop</div>
                    <ul>
                      <li>{JSON.parse(localStorage.getItem("naming")).workshopType}</li>
                      <li>
                        {JSON.parse(localStorage.getItem("naming")).workshopPlace}
                      </li>
                      <li>
                        {JSON.parse(localStorage.getItem("naming")).participants}{" "}
                        Participants
                      </li>
                      <li>
                        {JSON.parse(localStorage.getItem("naming")).moderator} Moderator
                      </li>
                      <li>
                        {JSON.parse(localStorage.getItem("naming")).assistant} Assistant
                      </li>
                    </ul>
        
                    <div className="service-title"> Allgemeine Leistungen Nachbereitung/ Dokumentation </div>
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
        
                    {JSON.parse(localStorage.getItem("naming")).catering && (
                      <>
                        <div className="service-title">Catering</div>
                        <ul>
                          {JSON.parse(localStorage.getItem("naming")).fingerfood && (
                            <li>Fingerfood</li>
                          )}
                          {JSON.parse(localStorage.getItem("naming")).kuchen && (
                            <li>Eis / kuchen</li>
                          )}
                          {JSON.parse(localStorage.getItem("naming")).lunch && (
                            <li>Lunch</li>
                          )}
                        </ul>
                      </>
                    )}
                    {JSON.parse(localStorage.getItem("naming")).teambuilding && (
                      <>
                        <div className="service-title">Teambuilding</div>
                        <ul>
                          {JSON.parse(localStorage.getItem("naming")).scrumKitchen && (
                            <li>Scrum Kitchen</li>
                          )}
                          {JSON.parse(localStorage.getItem("naming")).drinks && (
                            <li>Afterwork Drinks</li>
                          )}
                          {JSON.parse(localStorage.getItem("naming")).dachterasse && (
                            <li>Afterwork Dachterasse (Drinks & Grillen)</li>
                          )}
                        </ul>
                      </>
                    )}
                </div>}
          {brandingKonzept != null &&   
          <div className="service-list-container">
            <div className="product-title">{brandingKonzept.name}</div>
            <div className="service-title">Allgemeine Leistungen zur Vorbereitung</div>
            <ul>
              <li>Initiales Kick-off Meeting</li>
              <li>Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage</li>
              <li>Erstellung Agenda</li>
              <li>Raumbuchung & -vorbereitung</li>
              <li>Materialvorbereitung</li>
              <li>Anlegen Miro-Board</li>
            </ul>

            <div className="service-title" >Audit</div>
            <ul>
              <li>Marke & Positionierung</li>
              <li>Zielgruppenanalyse Employee Audit</li>
              <li>Trend- und Benchmarkanalyse</li>
            </ul>

            <div className="service-title">Creation</div>
            <ul>
              <li>Interne Werte-Definition</li>
              <li>Talent Journey</li>
              <li>Persona & Bedürfnisse</li>
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .impulsvortrag && <li>Impulsvortrag</li>}
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .purposeVision && <li>Purpose Vision & Mission Entwicklung</li>}
            </ul>

            <div className="service-title">Konzept</div>
            <ul>
              <li>Werte-Aktivierung Employee Branding Kampagne</li>
              <li>Hyrbid Employee Experience</li>
              <li>Organisations & Führungsverständnis</li>
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .workspaceKonzept && <li>New Work Space Konzept</li>}
              {JSON.parse(localStorage.getItem("brandingKonzept"))
                .brandStory && <li>Internal Brand Story</li>}
            </ul>

            <div className="service-title">Workshop</div>
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

            <div className="service-title"> Allgemeine Leistungen Nachbereitung/ Dokumentation </div>
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
              <>
                <div className="service-title">Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("brandingKonzept"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </>
            )}
            {JSON.parse(localStorage.getItem("brandingKonzept"))
              .teambuilding && (
              <>
                <div className="service-title">Teambuilding</div>
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
              </>
            )}
          </div>}

          {corporateDesign != null && 
                  <div className="service-list-container">
                                <div className="product-title">{corporateDesign.name}</div>
                    <div className="service-title">Allgemeine Leistungen zur Vorbereitung</div>
                    <ul>
                      <li>Initiales Kick-off Meeting</li>
                      <li>Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage</li>
                      <li>Erstellung Agenda</li>
                      <li>Raumbuchung & -vorbereitung</li>
                      <li>Materialvorbereitung</li>
                      <li>Anlegen Miro-Board</li>
                    </ul>
        
                    <div className="service-title">Audit</div>
                    <ul>
                      <li>Trend- und Benchmarkanalyse</li>
                      <li>Design Audit</li>
                    </ul>
        
                    <div className="service-title">Konzeot</div>
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
        
                    <div className="service-title">Workshop</div>
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
        
                    <div className="service-title"> Allgemeine Leistungen Nachbereitung/ Dokumentation </div>
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
                      <>
                        <div className="service-title">Catering</div>
                        <ul>
                          {JSON.parse(localStorage.getItem("corporateDesign"))
                            .fingerfood && <li>Fingerfood</li>}
                          {JSON.parse(localStorage.getItem("corporateDesign"))
                            .kuchen && <li>Eis / kuchen</li>}
                          {JSON.parse(localStorage.getItem("corporateDesign"))
                            .lunch && <li>Lunch</li>}
                        </ul>
                      </>
                    )}
                    {JSON.parse(localStorage.getItem("corporateDesign"))
                      .teambuilding && (
                      <>
                        <div className="service-title">Teambuilding</div>
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
                      </>
                    )}
                </div>
          }

          {omnichannelKonzept != null &&
          <div className="service-list-container">
                        <div className="product-title">{omnichannelKonzept.name}</div>
            <div className="service-title">Allgemeine Leistungen zur Vorbereitung</div>
            <ul>
              <li>Initiales Kick-off Meeting</li>
              <li>Sichtung Input Kunde & Schaffung einer Arbeitsgrundlage</li>
              <li>Erstellung Agenda</li>
              <li>Raumbuchung & -vorbereitung</li>
              <li>Materialvorbereitung</li>
              <li>Anlegen Miro-Board</li>
            </ul>

            <div className="service-title">Audit</div>
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

            <div className="service-title">Creation</div>
            <ul>
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

            <div className="service-title">Konzept</div>
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

            <div className="service-title">Workshop</div>
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

            <div className="service-title"> Allgemeine Leistungen Nachbereitung/ Dokumentation </div>
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
              <>
                <div className="service-title">Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("omnichannelKonzept"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </>
            )}
            {JSON.parse(localStorage.getItem("omnichannelKonzept"))
              .teambuilding && (
              <>
                <div className="service-title">Teambuilding</div>
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
              </>
            )}
        </div>
        }
        {markenentwicklungData != null &&
          <div className="service-list-container">
            <div className="product-title">{markenentwicklungData.name}</div>
            <div className="service-title">Audit</div>
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
            <div className="service-title">Workshop</div>
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
            <div className="service-title">Markenentwicklung</div>
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
              <>
                <div className="service-title">Catering</div>
                <ul>
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .fingerfood && <li>Fingerfood</li>}
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .kuchen && <li>Eis / kuchen</li>}
                  {JSON.parse(localStorage.getItem("markenentwicklung"))
                    .lunch && <li>Lunch</li>}
                </ul>
              </>
            )}
            {JSON.parse(localStorage.getItem("markenentwicklung"))
              .teambuilding && (
              <>
                <div className="service-title">Teambuilding</div>
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
              </>
            )}
        </div>
        }


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


