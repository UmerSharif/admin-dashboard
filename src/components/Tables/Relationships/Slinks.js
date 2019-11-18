import React from "react";
import Table from "react-bootstrap/Table";
import "./Slinks.scss";
export default function Slinks({ slinks }) {
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
            <td>{slinks}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
