import React from "react";
import Table from "react-bootstrap/Table";
export default function Statistics({
  data: {
    active_operations,
    adaptive_avg_select_time,
    connections,
    routed_packets,
    total_connections,
    persistent_connections
  }
}) {
  return (
    <div className="__tables">
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th className="header__center" colSpan="6">
              Statistics
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>active_operations</td>
            <td>adaptive_avg_select_time</td>
            <td>connections</td>
            <td>persistent_connections</td>
            <td>routed_packets</td>
            <td>total_connections</td>
          </tr>

          <tr>
            <td>{active_operations}</td>
            <td>{adaptive_avg_select_time}</td>
            <td>{connections}</td>
            <td>{persistent_connections}</td>
            <td>{routed_packets}</td>
            <td>{total_connections}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
