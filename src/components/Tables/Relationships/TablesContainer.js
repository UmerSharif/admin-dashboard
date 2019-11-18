import React from "react";
import Slinks from "./Slinks";
import Sdata from "./Sdata";
import Mlinks from "./Mlinks";
import Mdata from "./Mdata";
import "./TablesContainer.scss";
export default function TablesContainer({ slinks, sdata, mlinks, mdata }) {
  return (
    <section className="relationships">
      <div className="header__relationship Theader">
        <h3>Relationships</h3>
      </div>

      <section className="services">
        <div className="header__sub__relationship Theader">
          <h4>Services</h4>
        </div>

        <Slinks slinks={slinks} />
        <Sdata sdata={sdata} />
      </section>
      <div className="monitors">
        <div className="header__sub__relationship Theader">
          <h4>Monitors</h4>
        </div>
        <Mlinks mlinks={mlinks} />
        <Mdata mdata={mdata} />
      </div>
    </section>
  );
}
