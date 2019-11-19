import React from "react";
import "./Load.scss";
export default function Load({ last_second }) {
  return (
    <section className="graph__container__inner">
      <h4>loaddata</h4>
      {last_second}
    </section>
  );
}
