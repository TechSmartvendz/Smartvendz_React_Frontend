import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function SubLink(props) {
  const [Sublinks, setSubLinks] = useState(props.sublinks);
  return (
    <>
      <div className="sub-route-div">
        {Sublinks.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              <button className="subroute-btn" key={index}>
                {item.title}
              </button>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </>
  );
}

export default SubLink;
