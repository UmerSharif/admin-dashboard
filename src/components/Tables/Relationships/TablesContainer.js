import React from "react";
import Slinks from "./Slinks";
import Sdata from "./Sdata";
import "./TablesContainer.scss";
export default function TablesContainer({ slinks, sdata }) {
  return (
    <section className="relationships">
      <div className="header__relationship Theader">
        <h3>Relationships</h3>
      </div>

      <section className="services">
        <div className="header__services Theader">
          <h4>Services</h4>
        </div>

        <Slinks slinks={slinks} />
        <Sdata sdata={sdata} />
      </section>
    </section>
  );
}
