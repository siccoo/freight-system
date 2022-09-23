import { Layout } from 'antd';
import React from 'react';
import Topbar from '../topbar';
import "./index.css";

import OnePortLogo from "../../assets/oneportLogo.png";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import CustomerIcon from "../../assets/customerIcon.svg";
import AdminIcon from "../../assets/adminIcon.svg";
import ShipmentIcon from "../../assets/shipmentIcon.svg";
import TrackIcon from "../../assets/trackingIcon.svg";
import DocumentIcon from "../../assets/documentIcon.svg";
import QuoteIcon from "../../assets/quoteIcon.svg";
import InvoiceIcon from "../../assets/invoiceIcon.svg";
import { Link, NavLink } from 'react-router-dom';

type SiderLayoutProps = {
  children: JSX.Element | any
}

const { Content, Sider } = Layout;

const SiderLayout: React.FC<SiderLayoutProps> = ({ children }) => (
  <Layout style={{ 
    height: "100vh", 
    overflow: "hidden" 
    }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="layout__sidebar"
      style={{
        margin: 0,
        minHeight: 800,
        borderRight: "1px solid #E5E7EB",
      }}
    >
      <Link to={'/'}>
      <img
        className="oneportLogo"
        src={OnePortLogo}
        alt="oneportLogo"
        style={{
          width: 140,
          height: 41,
          margin: 25,
          cursor: "pointer"
        }} />
      </Link>
      

      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <li className="sidebar__listItem ">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={DashboardIcon} alt="sidebar__image" />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={AdminIcon} alt="sidebar__image" />
              </span>
              Admin
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={CustomerIcon} alt="" />
              </span>
              Customers
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/shipments"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={ShipmentIcon} alt="sidebar__icon" />
              </span>
              Shipments
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/tracking"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={TrackIcon} alt="sidebar__image" />
              </span>
              Tracking
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/documents"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={DocumentIcon} alt="sidebar__image" />
              </span>
              Documents
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/rates"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={DocumentIcon} alt="sidebar__image" />
              </span>
              Rates
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/quotes"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={QuoteIcon} alt="sidebar__image" />
              </span>
              Quotes
            </NavLink>
          </li>
          <li className="sidebar__listItem">
            <NavLink
              to="/invoices"
              className={({ isActive }) =>
                isActive ? "activeClassName" : undefined
              }
            >
              <span className='sidebar-img'>
                <img className='sidebar__image' src={InvoiceIcon} alt="sidebar__image" />
              </span>
              Invoices
            </NavLink>
          </li>
        </ul>
      </div>
    </Sider>
    <Layout>
      <Topbar />
      <Content style={{ margin: '0' }}>
        {children}
      </Content>
    </Layout>
  </Layout>
);

export default SiderLayout;