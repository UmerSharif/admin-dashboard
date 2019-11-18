import React from "react";
import Table from "react-bootstrap/Table";
import "./Links.scss";
export default function Links({ selfLinks }) {
  return (
    <div className="links__table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Self</td>
            <td>{selfLinks}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
