import React from "react";
import UserManagerData from "./UserManageData";
import { Link, Outlet } from "react-router-dom";


function I() {
  return (
      <div>
      <div>
        {UserManagerData.map((item) => {
          return (
            <Link to={item.path} cname={item.cname}>
              <button>{item.title}</button>
            </Link>
          );
        })}
      </div>
      <Outlet />
      </div>

  );
}

export default I;
