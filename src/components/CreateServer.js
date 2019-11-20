import React from "react";
import "./CreateServer.scss";
import CreateServerForm from "../components/Forms/CreateServerForm";
export default function CreateServer() {
  return (
    <div className="create__server">
      <br />
      <div className="create__server__inner">
        <CreateServerForm />
      </div>
    </div>
  );
}
