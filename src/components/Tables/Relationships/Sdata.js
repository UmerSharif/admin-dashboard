import React from "react";
import Table from "react-bootstrap/Table";
export default function Sdata({ sdata }) {
  return (
    <div className="services__data__table">
      <Table striped bordered hover>
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
          {sdata.map((sd, index) => {
            return (
              <tr key={index}>
                <td>{sd.id}</td>
                <td>{sd.type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
