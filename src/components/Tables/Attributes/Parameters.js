import React from "react";
import Table from "react-bootstrap/Table";
export default function Parameters({
  data: {
    address,
    port,
    protocol,
    proxy_protocol,
    rank,
    ssl,
    ssl_cert_verify_depth,
    ssl_verify_peer_certificate,
    ssl_version
  }
}) {
  return (
    <div className="__tables">
      <Table size="sm" striped bordered hover responsive="xl">
        <thead>
          <tr>
            <th className="header__center" colSpan="20">
              Parameters
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>address</td>
            <td>port</td>
            <td>protocol</td>
            <td>proxy_protocol</td>
            <td>rank</td>
            <td>ssl</td>
            <td>ssl_cert_verify_depth</td>
            <td>ssl_verify_peer_certificate</td>
            <td>ssl_version</td>
          </tr>

          <tr>
            <td>{address}</td>
            <td>{port}</td>
            <td>{protocol}</td>
            <td>{proxy_protocol.toString()}</td>
            <td>{rank}</td>
            <td>{ssl}</td>
            <td>{ssl_cert_verify_depth}</td>
            <td>{ssl_verify_peer_certificate.toString()}</td>
            <td>{ssl_version}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
