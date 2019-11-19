import React from "react";
import Table from "react-bootstrap/Table";
export default function Links({ links }) {
  return (
    <div className="__tables">
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
            <td>{links}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
