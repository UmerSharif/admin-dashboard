import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServerDetail.scss";
import Relationships from "../components/Tables/Relationships/Relationships";
import Accordian from "../components/Accordian/Accordian";
export default function ServerDetail() {
  const [data, setData] = useState([]);
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
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //extracting data

  const renderedElements = data.map((obj, index) => {
    //destructuring data
    const {
      id: serverID,
      type,
      links: { self: selfLinks },
      relationships: {
        monitors: {
          links: { self: mlinks },
          data: mdata
        },
        services: {
          links: { self: slinks },
          data: sdata
        }
      },
      attributes: { parameters, statistics }
    } = obj;

    const elements = (
      <>
        <span>ID: {serverID}</span>
        <span> Type: {type}</span>
        <section key={index}>
          {/* {sdata.map((sd, sindex) => {
            return (
              <ul key={sindex}>
                <li>{sd.id}</li>
                <li>{sd.type}</li>
              </ul>
            );
          })} */}
          <Relationships slinks={slinks} sdata={sdata} />
        </section>
      </>
    );

    return (
      <Accordian serverID={serverID} key={index}>
        {elements}
      </Accordian>
    );
  });

  return (
    <div className="server">
      <h1>server Details</h1>
      {renderedElements}
    </div>
  );
}
