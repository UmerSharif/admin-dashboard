import React from "react";
import Links from "./Links";
import Sdata from "./Sdata";
import "./Relationships.scss";
export default function Relationships({ slinks, sdata }) {
  return (
    <section className="relationships">
      <div className="header__relationship Theader">
        <h3>Relationships</h3>
      </div>

      <section className="services">
        <div className="header__services Theader">
          <h4>Services</h4>
        </div>

        <Links slinks={slinks} />
        <Sdata sdata={sdata} />
      </section>
    </section>
  );
}
