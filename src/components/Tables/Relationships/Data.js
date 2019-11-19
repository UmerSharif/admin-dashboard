import React from "react";
import Table from "react-bootstrap/Table";
export default function Data({ data }) {
  return (
    <div className="__tables">
      <Table striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th className="header__center" colSpan="3">
              Data
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Type</td>
          </tr>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.id}</td>
                <td>{d.type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
