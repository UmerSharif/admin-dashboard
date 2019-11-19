import React from "react";
import "./Load.scss";
import RTChart from "react-rt-chart";
export default function Load({ last_second }) {
  const data = {
    date: new Date(),
    Load_data: last_second
  };

  const chart = {
    axis: {
      y: { min: 5, max: 100 }
    },
    point: {
      show: false
    }
  };

  return (
    <section className="graph__container__inner">
      {/* <h4>loaddata</h4>
      {last_second} */}
      <RTChart chart={chart} fields={["Load_data"]} data={data} />
    </section>
  );
}
