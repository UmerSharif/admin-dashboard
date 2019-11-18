import React from "react";
import Table from "react-bootstrap/Table";
export default function Mdata({ mdata }) {
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
          {mdata.map((md, index) => {
            return (
              <tr key={index}>
                <td>{md.id}</td>
                <td>{md.type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
