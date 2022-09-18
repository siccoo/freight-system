import { Layout } from 'antd';
import React from 'react';
import Topbar from '../topbar';
import "./index.css";

import OnePortLogo from "../../assets/oneportLogo.png";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import AdminIcon from "../../assets/adminIcon.svg";
import ShipmentIcon from "../../assets/shipmentIcon.svg";
import TrackIcon from "../../assets/trackingIcon.svg";
import DocumentIcon from "../../assets/documentIcon.svg";
import QuoteIcon from "../../assets/quoteIcon.svg";
import InvoiceIcon from "../../assets/invoiceIcon.svg";
import Customers from '../../pages/customers';


const { Content, Sider } = Layout;

const LayoutBuilder: React.FC = () => (
  <Layout style={{ height: "100vh" }}>
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
        minHeight: 750,
        borderRight: "1px solid #E5E7EB",
      }}
    >
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

      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <li className="sidebar__listItem ">
            <img className='sidebar__icon' src={DashboardIcon} alt="sidebar__icon" /> Dashboard
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={AdminIcon} alt="sidebar__icon" />
            Admin
          </li>
          <li className="sidebar__listItem">
            <div className='sidebar__listItem--default'>
              <svg className='sidebar__image' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6 4.2001C14.6 6.18832 12.9882 7.8001 11 7.8001C9.01173 7.8001 7.39995 6.18832 7.39995 4.2001C7.39995 2.21187 9.01173 0.600098 11 0.600098C12.9882 0.600098 14.6 2.21187 14.6 4.2001Z" fill="#6B7280" />
                <path d="M20.6 6.6001C20.6 7.92558 19.5254 9.0001 18.1999 9.0001C16.8745 9.0001 15.8 7.92558 15.8 6.6001C15.8 5.27461 16.8745 4.2001 18.1999 4.2001C19.5254 4.2001 20.6 5.27461 20.6 6.6001Z" fill="#6B7280" />
                <path d="M15.8 15.0001C15.8 12.3491 13.6509 10.2001 11 10.2001C8.34898 10.2001 6.19995 12.3491 6.19995 15.0001V18.6001H15.8V15.0001Z" fill="#6B7280" />
                <path d="M6.19995 6.6001C6.19995 7.92558 5.12543 9.0001 3.79995 9.0001C2.47447 9.0001 1.39995 7.92558 1.39995 6.6001C1.39995 5.27461 2.47447 4.2001 3.79995 4.2001C5.12543 4.2001 6.19995 5.27461 6.19995 6.6001Z" fill="#6B7280" />
                <path d="M18.1999 18.6001V15.0001C18.1999 13.7351 17.8737 12.5463 17.3008 11.5133C17.5882 11.4394 17.8895 11.4001 18.1999 11.4001C20.1882 11.4001 21.7999 13.0119 21.7999 15.0001V18.6001H18.1999Z" fill="#6B7280" />
                <path d="M4.69907 11.5133C4.12617 12.5463 3.79995 13.7351 3.79995 15.0001V18.6001H0.199951V15.0001C0.199951 13.0119 1.81173 11.4001 3.79995 11.4001C4.1104 11.4001 4.41167 11.4394 4.69907 11.5133Z" fill="#6B7280" />
              </svg>
            </div>
            <div className='sidebar__listItem--hovered'>
              <svg className='sidebar__image' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6 4.2001C14.6 6.18832 12.9882 7.8001 11 7.8001C9.01173 7.8001 7.39995 6.18832 7.39995 4.2001C7.39995 2.21187 9.01173 0.600098 11 0.600098C12.9882 0.600098 14.6 2.21187 14.6 4.2001Z" fill="white" />
                <path d="M20.6 6.6001C20.6 7.92558 19.5254 9.0001 18.1999 9.0001C16.8745 9.0001 15.8 7.92558 15.8 6.6001C15.8 5.27461 16.8745 4.2001 18.1999 4.2001C19.5254 4.2001 20.6 5.27461 20.6 6.6001Z" fill="white" />
                <path d="M15.8 15.0001C15.8 12.3491 13.6509 10.2001 11 10.2001C8.34898 10.2001 6.19995 12.3491 6.19995 15.0001V18.6001H15.8V15.0001Z" fill="white" />
                <path d="M6.19995 6.6001C6.19995 7.92558 5.12543 9.0001 3.79995 9.0001C2.47447 9.0001 1.39995 7.92558 1.39995 6.6001C1.39995 5.27461 2.47447 4.2001 3.79995 4.2001C5.12543 4.2001 6.19995 5.27461 6.19995 6.6001Z" fill="white" />
                <path d="M18.1999 18.6001V15.0001C18.1999 13.7351 17.8737 12.5463 17.3008 11.5133C17.5882 11.4394 17.8895 11.4001 18.1999 11.4001C20.1882 11.4001 21.7999 13.0119 21.7999 15.0001V18.6001H18.1999Z" fill="white" />
                <path d="M4.69907 11.5133C4.12617 12.5463 3.79995 13.7351 3.79995 15.0001V18.6001H0.199951V15.0001C0.199951 13.0119 1.81173 11.4001 3.79995 11.4001C4.1104 11.4001 4.41167 11.4394 4.69907 11.5133Z" fill="white" />
              </svg>
            </div>

            Customers
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={ShipmentIcon} alt="sidebar__icon" />
            Shipments
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={TrackIcon} alt="sidebar__icon" />
            Tracking
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={DocumentIcon} alt="sidebar__icon" />
            Documents
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={DocumentIcon} alt="sidebar__icon" />
            Rates
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={QuoteIcon} alt="sidebar__icon" />
            Quotes
          </li>
          <li className="sidebar__listItem">
            <img className='sidebar__icon' src={InvoiceIcon} alt="sidebar__icon" />
            Invoices
          </li>
        </ul>
      </div>
    </Sider>
    <Layout>
      <Topbar />
      <Customers />
    </Layout>
  </Layout>
);

export default LayoutBuilder;