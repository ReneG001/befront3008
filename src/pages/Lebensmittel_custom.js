import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import lolli from "../pages/images/lolli.jpg";
import "./Main.css";

export default function Lebensmittel() {
  return (
    <div>
      <Navbar />
      <Banner title="Lebensmittel" />
      <div className="container text-left">
        <div className="row">
          <div className="col-md-6">
            <img src={lolli} alt="Lolli" width="420" height="420" />
          </div>
          <div className="col-md-6">
            <h2>Sugary - leicht und selbstbewusst unterwegs...</h2>
            <p>
              Sugary ist von Menschen mit Diabetes für Menschen mit Diabetes. In
              der Sugary App findest du all deine wichtigen Diabetes-Daten,
              Integrationen und manuelle Einträge, bequem an einem Ort.
            </p>
            <p>
              Die Sugary App steht dir in deinem Diabetes-Alltag jederzeit zur
              Seite und hilft dir dabei, motiviert und selbstbewusst dein
              Monster zu zähmen!
            </p>
            <h2>Sugary - du brauchst sie einfach!</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
