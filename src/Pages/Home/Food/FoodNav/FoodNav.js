import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const FoodNav = () => {
    return (
      <div>
        <nav>
          <div className="mt-5 text-center">
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                borderBottom: isActive ? "2px solid red" : "",
              };
            }} to="/breakfast" className="text-decoration-none fw-bold me-5">
              Breakfast
            </NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                borderBottom: isActive ? "2px solid red" : ""
              };
            }} to="/lunch" className="text-decoration-none fw-bold me-5">
              Lunch
            </NavLink>
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                borderBottom: isActive ? "2px solid red" : "",
              };
            }} to="/dinner" className="text-decoration-none fw-bold">
              Dinner
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    );
};

export default FoodNav;