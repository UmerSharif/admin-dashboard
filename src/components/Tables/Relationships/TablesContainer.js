import React from "react";
import Links from "./Links";
import Data from "./Data";
import AttributeTable from "../Attributes/AttributeTable";
import "./TablesContainer.scss";
import Parameters from "../Attributes/Parameters";
import Statistics from "../Attributes/Statistics";
export default function TablesContainer({
  slinks,
  sdata,
  mlinks,
  mdata,
  last_event,
  master_id,
  node_id,
  replication_lag,
  state,
  triggered_at,
  version_string,
  parameters,
  statistics
}) {
  const AtrributeTableData = {
    last_event,
    master_id,
    node_id,
    replication_lag,
    state,
    triggered_at,
    version_string
  };
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
        <section className="monitors">
          <div className="header__sub__relationship Theader">
            <h4>Monitors</h4>
          </div>
          <Links links={mlinks} />
          <Data data={mdata} />
        </section>
      </section>
      <section className="main__content__header">
        <div className="header__attributes Theader">
          <h3>Attributes</h3>
        </div>
        <AttributeTable data={AtrributeTableData} />

        <section className="parameters">
          <Parameters data={parameters} />
          <Statistics data={statistics} />
        </section>
      </section>
    </>
  );
}
