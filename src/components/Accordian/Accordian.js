import React, { useRef, useState, useEffect } from "react";
import { FaTrashAlt, FaServer } from "react-icons/fa";
import Chevron from "./Chevron";
import "./Accordian.scss";
export default function Accordian(props) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  //extracting server id from children passed to accordian

  // const x = props.children.props.children.map(d => {
  //   console.log(typeof d.props.children);
  //   return d.props.children;
  // });
  // console.log(x[0][1]);
  // const serverID = x[0][1];

  return (
    <>
      <br />
      <div className="accordion__section">
        <button
          className={`accordion ${active ? "active--bar" : ""}`}
          onClick={toogleActive}
        >
          <span className="server__icon">
            <FaServer className="fa__icons" />
          </span>

          <span className="accordion__title">View {props.serverID} </span>
          <Chevron
            className={active ? "accordion__icon rotate" : "accordion__icon"}
            width={15}
            fill={"#777"}
          />
        </button>
        <div ref={contentRef} className="accordion__content">
          {props.children}
          <div className="delete__icon">
            <FaTrashAlt className="fa__icons" /> <span>Delete Server</span>
          </div>
        </div>
      </div>
    </>
  );
}
