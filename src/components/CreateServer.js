import React from "react";
import "./CreateServer.scss";
import CreateServerForm from "../components/Forms/CreateServerForm";
export default function CreateServer() {
  return (
    <div className="create__server">
      <h1>Create Server</h1>
      <CreateServerForm />
    </div>
  );
}
