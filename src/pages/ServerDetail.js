import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServerDetail.scss";
export default function ServerDetail() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get("http://54.229.207.205:8989/v1/servers", {
        auth: {
          username: "user2",
          password: "hotloaf58"
        }
      })
      .then(res => {
        console.log(res.status);
        const { data } = res.data;
        //console.log(serversData);
        // const { data } = serversData;
        // console.log(data);
        setState(data);
      });
  }, []);
  // const { data } = state;
  console.log(state);
  return (
    <div className="server">
      <h1>server Details</h1>
    </div>
  );
}
