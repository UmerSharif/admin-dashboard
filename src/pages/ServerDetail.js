import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import "./ServerDetail.scss";
import TablesContainer from "../components/Tables/Relationships/TablesContainer";
import Accordian from "../components/Accordian/Accordian";
export default function ServerDetail() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  //api call function
  const fetchData = async () => {
    setIsError(false);

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
  };

  //call api function using react hooks

  useEffect(() => {
    fetchData();
  }, []);

  //extracting data

  const renderedElements = data.map((obj, index) => {
    //destructuring data
    const {
      id: serverID,
      type,

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
      attributes: {
        last_event,
        master_id,
        node_id,
        replication_lag,
        state,
        triggered_at,
        version_string,
        parameters,
        statistics
      }
    } = obj;

    //passing data to our table container component

    const elements = (
      <>
        <span>ID: {serverID}</span>
        <span> Type: {type}</span>
        <section key={index}>
          <TablesContainer
            slinks={slinks}
            sdata={sdata}
            mlinks={mlinks}
            mdata={mdata}
            parameters={parameters}
            statistics={statistics}
            last_event={last_event}
            master_id={master_id}
            node_id={node_id}
            replication_lag={replication_lag}
            state={state}
            triggered_at={triggered_at}
            version_string={version_string}
          />
        </section>
      </>
    );
    // passing the return tables to accordian component
    return (
      <Accordian serverID={serverID} key={index}>
        {elements}
      </Accordian>
    );
  });

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      <div className="server">
        <div className="main-header__server">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="create__server__link">
          <NavLink to="/createserver" activeClassName="active">
            <FaPlus className="fa__icons" /> <span>Server</span>
          </NavLink>
        </div>
        {/* rendering the accordian component with all the tables here */}
        {renderedElements}
      </div>
    </>
  );
}
