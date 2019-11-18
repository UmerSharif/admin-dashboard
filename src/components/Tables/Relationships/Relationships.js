import React from "react";
import Links from "./Links";
import "./Relationships.scss";
export default function Relationships({ selfLinks }) {
  return (
    <section className="relationships">
      <div className="header__relationship Theader">
        <h3>Relationships</h3>
      </div>

      <section className="services">
        <div className="header__services Theader">
          <h4>Services</h4>
        </div>

        <Links selfLinks={selfLinks} />
      </section>
    </section>
  );
}
