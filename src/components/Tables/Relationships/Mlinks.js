import React from "react";
import Table from "react-bootstrap/Table";
// import "./Mlinks.scss";
export default function Mlinks({ mlinks }) {
  return (
    <div className="links__table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="header__center" colSpan="2">
              Links
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Self</td>
            <td>{mlinks}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
