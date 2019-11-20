import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Threads.scss";
import Load from "../components/Graphs/Load";
export default function Threads() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  //api call function
  const fetchData = async () => {
    setIsError(false);

    try {
      const result = await axios.get(
        "http://54.229.207.205:8989/v1/maxscale/threads",
        {
          auth: {
            username: "user2",
            password: "hotloaf58"
          }
        }
      );
      const { data } = result.data;
      setData(data);
    } catch (error) {
      setIsError(true);
    }
  };

  //calling the api call function inside react hook
  useEffect(() => {
    //calling the api every second
    // const intervalId = setInterval(() => {
    //   fetchData();
    // }, 1000);

    // cleaning the interval in component unmount lifecycle hook
    // return () => clearInterval(intervalId);
    fetchData();
  }, []);
  console.log(data);

  //maping through the returned api call
  const LoadRenderedData = data.map((obj, index) => {
    //destructuring
    const {
      attributes: {
        stats: {
          load: { last_second }
        }
      },
      id: threadID
    } = obj;

    // passing the last_second to our Load component for display
    return <Load last_second={last_second} key={index} threadID={threadID} />;
  });

  return (
    <>
      {isError && <div style={{ color: "red" }}>Something went wrong ...</div>}
      <div className="threads">
        <div className="main-header__thread">
          <div className="main-header__heading">
            Hello User, here the last_secod load is plotted for each thread.
            Y-axis is Load, while the X-axis is time.
          </div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        {/* rendering the Load component returned from above */}
        <div className="graph__container"> {LoadRenderedData}</div>
      </div>
    </>
  );
}
