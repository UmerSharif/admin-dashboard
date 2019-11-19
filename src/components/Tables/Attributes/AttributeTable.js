import React from "react";
import Table from "react-bootstrap/Table";
export default function AttributeTable({
  data: {
    last_event,
    master_id,
    node_id,
    replication_lag,
    state,
    triggered_at,
    version_string
  }
}) {
  return (
    <div className="__tables">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="header__center" colSpan="7">
              Attributes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>last_event</td>
            <td>master_id</td>
            <td>node_id</td>
            <td>replication_lag</td>
            <td>state</td>
            <td>triggered_at</td>
            <td>version_string</td>
          </tr>

          <tr>
            <td>{last_event}</td>
            <td>{master_id}</td>
            <td>{node_id}</td>
            <td>{replication_lag}</td>
            <td>{state}</td>
            <td>{triggered_at}</td>
            <td>{version_string}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
