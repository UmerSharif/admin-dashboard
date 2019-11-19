import React from "react";
import Links from "./Links";
import Data from "./Data";
import "./TablesContainer.scss";
export default function TablesContainer({ slinks, sdata, mlinks, mdata }) {
  return (
    <>
      <section className="main__content__header">
        <div className="header__relationship Theader">
          <h3>Relationships</h3>
        </div>

        <section className="services">
          <div className="header__sub__relationship Theader">
            <h4>Services</h4>
          </div>

          <Links links={slinks} />
          <Data data={sdata} />
        </section>
        <div className="monitors">
          <div className="header__sub__relationship Theader">
            <h4>Monitors</h4>
          </div>
          <Links links={mlinks} />
          <Data data={mdata} />
        </div>
      </section>
      <section className="main__content__header">
        <div className="header__attributes Theader">
          <h3>Attributes</h3>
        </div>
      </section>
    </>
  );
}
