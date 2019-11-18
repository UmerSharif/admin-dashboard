import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServerDetail.scss";
export default function ServerDetail() {
  //testing with async
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await axios.get("http://54.229.207.205:8989/v1/servers", {
        auth: {
          username: "user2",
          password: "hotloaf58"
        }
      });
      const { data } = result.data;
      setData(data);
      console.log(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //testing with async

  // const [state, setState] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("http://54.229.207.205:8989/v1/servers", {
  //       auth: {
  //         username: "user2",
  //         password: "hotloaf58"
  //       }
  //     })
  //     .then(res => {
  //       console.log(res.status);
  //       const { data } = res.data;
  //       //console.log(serversData);
  //       // const { data } = serversData;
  //       // console.log(data);
  //       setState(data);
  //     });
  // }, []);
  // // const { data } = state;
  // console.log(state);
  return (
    <div className="server">
      <h1>server Details</h1>
    </div>
  );
}
