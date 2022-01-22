import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import dashLogo from "../../../images/logo2.png";
import './Dashboard.css';
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";
import Review from '../Review/Review';
import ManageFood from "../ManageFood/ManageFood";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import AddFood from "../AddFood/AddFood";
import MakeAdmin from "../MakeAdmin/MakeAdmin";


const Dashboard = () => {
    return (
      <div className="my-5">
        <div className="container">
          <div className="row g-2">
            <div className="col-lg-3 col-12">
              <nav>
                <div className="sidebar">
                  <ul className="list-unstyled">
                    <li>
                      <NavLink
                        to=""
                        className="text-decoration-none d-flex align-items-center px-5 py-3 fw-bold border-bottom"
                      >
                        <img alt="" src={dashLogo} width="150" height="35" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to=""
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-home"></i>
                        <div className="title px-2">Home</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to=""
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-pizza-slice"></i>
                        <div className="title px-2">Eat More Food</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="myOrder"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-luggage-cart"></i>
                        <div className="title px-2">My Order</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="payment"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-money-bill-alt"></i>
                        <div className="title px-2">Payment</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="review"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-book-reader"></i>
                        <div className="title px-2">Review</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="manageFood"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-chart-bar"></i>
                        <div className="title px-2">Manage All Food</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="manageOrder"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-tasks"></i>
                        <div className="title px-2">Manage Orders</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="addFood"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-plus-square"></i>
                        <div className="title px-2">Add New Food</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="makeAdmin"
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-user-shield"></i>
                        <div className="title px-2">Make Admin</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to=""
                        className="text-decoration-none d-flex align-items-center px-5 py-3"
                      >
                        <i className="fas fa-sign-out-alt"></i>
                        <div className="title px-2">Logout</div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
              <Outlet />
            </div>
            <div className="col-lg-9 col-12">
              <div className="main p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="search">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search here"
                    />
                    <label htmlFor="search">
                      <i className="fas fa-search ms-1 search-btn"></i>
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <i class="fas fa-bell me-3"></i>
                    <div className="user">
                      <i className="far fa-user-circle fa-2x"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-call p-3">
                <div>
                  <Routes>
                    <Route path="/" element={<MyOrder />} />
                    <Route path="myOrder" element={<MyOrder />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="review" element={<Review />} />
                    <Route path="manageFood" element={<ManageFood />} />
                    <Route path="manageOrder" element={<ManageAllOrder />} />
                    <Route path="addFood" element={<AddFood />} />
                    <Route path="makeAdmin" element={<MakeAdmin />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;