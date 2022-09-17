import { Layout } from 'antd';
import React from 'react';

import OnePortLogo from "../../assets/oneportLogo.png";

import "./index.css";

const { Header, Content, Sider } = Layout;

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
        borderRight: "1px solid #E5E7EB"
      }}
    >
      <img className="oneportLogo" src={OnePortLogo} alt="oneportLogo" style={{ width: 120, height: 41, margin: 20 }} />

      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <li className="sidebar__listItem ">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.99998 0.600098C1.67449 0.600098 0.599976 1.67461 0.599976 3.0001V5.4001C0.599976 6.72558 1.67449 7.8001 2.99998 7.8001H5.39998C6.72546 7.8001 7.79998 6.72558 7.79998 5.4001V3.0001C7.79998 1.67461 6.72546 0.600098 5.39998 0.600098H2.99998Z" fill="#6B7280" />
              <path d="M2.99998 10.2001C1.67449 10.2001 0.599976 11.2746 0.599976 12.6001V15.0001C0.599976 16.3256 1.67449 17.4001 2.99998 17.4001H5.39998C6.72546 17.4001 7.79998 16.3256 7.79998 15.0001V12.6001C7.79998 11.2746 6.72546 10.2001 5.39998 10.2001H2.99998Z" fill="#6B7280" />
              <path d="M10.2 3.0001C10.2 1.67461 11.2745 0.600098 12.6 0.600098H15C16.3255 0.600098 17.4 1.67461 17.4 3.0001V5.4001C17.4 6.72558 16.3255 7.8001 15 7.8001H12.6C11.2745 7.8001 10.2 6.72558 10.2 5.4001V3.0001Z" fill="#6B7280" />
              <path d="M10.2 12.6001C10.2 11.2746 11.2745 10.2001 12.6 10.2001H15C16.3255 10.2001 17.4 11.2746 17.4 12.6001V15.0001C17.4 16.3256 16.3255 17.4001 15 17.4001H12.6C11.2745 17.4001 10.2 16.3256 10.2 15.0001V12.6001Z" fill="#6B7280" />
            </svg> Dashboard
          </li>
          <li className="sidebar__listItem">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.6 9.9999C19.6 15.3018 15.302 19.5999 10 19.5999C4.69809 19.5999 0.400024 15.3018 0.400024 9.9999C0.400024 4.69797 4.69809 0.399902 10 0.399902C15.302 0.399902 19.6 4.69797 19.6 9.9999ZM12.4 6.3999C12.4 7.72539 11.3255 8.7999 10 8.7999C8.67454 8.7999 7.60002 7.72539 7.60002 6.3999C7.60002 5.07442 8.67454 3.9999 10 3.9999C11.3255 3.9999 12.4 5.07442 12.4 6.3999ZM9.99994 11.1999C7.57889 11.1999 5.49276 12.6338 4.54451 14.6988C5.86486 16.2303 7.8192 17.1999 10 17.1999C12.1808 17.1999 14.1351 16.2304 15.4554 14.6989C14.5072 12.6339 12.421 11.1999 9.99994 11.1999Z" fill="#6B7280" />
            </svg>
            Admin
          </li>
          <li className="sidebar__listItem">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6 4.2001C14.6 6.18832 12.9882 7.8001 11 7.8001C9.01173 7.8001 7.39995 6.18832 7.39995 4.2001C7.39995 2.21187 9.01173 0.600098 11 0.600098C12.9882 0.600098 14.6 2.21187 14.6 4.2001Z" fill="white" />
              <path d="M20.6 6.6001C20.6 7.92558 19.5254 9.0001 18.1999 9.0001C16.8745 9.0001 15.8 7.92558 15.8 6.6001C15.8 5.27461 16.8745 4.2001 18.1999 4.2001C19.5254 4.2001 20.6 5.27461 20.6 6.6001Z" fill="white" />
              <path d="M15.8 15.0001C15.8 12.3491 13.6509 10.2001 11 10.2001C8.34898 10.2001 6.19995 12.3491 6.19995 15.0001V18.6001H15.8V15.0001Z" fill="white" />
              <path d="M6.19995 6.6001C6.19995 7.92558 5.12543 9.0001 3.79995 9.0001C2.47447 9.0001 1.39995 7.92558 1.39995 6.6001C1.39995 5.27461 2.47447 4.2001 3.79995 4.2001C5.12543 4.2001 6.19995 5.27461 6.19995 6.6001Z" fill="white" />
              <path d="M18.1999 18.6001V15.0001C18.1999 13.7351 17.8737 12.5463 17.3008 11.5133C17.5882 11.4394 17.8895 11.4001 18.1999 11.4001C20.1882 11.4001 21.7999 13.0119 21.7999 15.0001V18.6001H18.1999Z" fill="white" />
              <path d="M4.69907 11.5133C4.12617 12.5463 3.79995 13.7351 3.79995 15.0001V18.6001H0.199951V15.0001C0.199951 13.0119 1.81173 11.4001 3.79995 11.4001C4.1104 11.4001 4.41167 11.4394 4.69907 11.5133Z" fill="white" />
            </svg>
            Customers
          </li>
          <li className="sidebar__listItem active">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.60002 15.8C7.60002 16.7942 6.79414 17.6 5.80002 17.6C4.80591 17.6 4.00002 16.7942 4.00002 15.8C4.00002 14.8059 4.80591 14 5.80002 14C6.79414 14 7.60002 14.8059 7.60002 15.8Z" fill="#6B7280" />
              <path d="M16 15.8C16 16.7942 15.1941 17.6 14.2 17.6C13.2059 17.6 12.4 16.7942 12.4 15.8C12.4 14.8059 13.2059 14 14.2 14C15.1941 14 16 14.8059 16 15.8Z" fill="#6B7280" />
              <path d="M1.60002 0.800049C0.937283 0.800049 0.400024 1.33731 0.400024 2.00005V14C0.400024 14.6628 0.937283 15.2 1.60002 15.2H2.86004C3.138 13.8307 4.34865 12.8 5.80002 12.8C7.2514 12.8 8.46205 13.8307 8.74001 15.2H10C10.6628 15.2 11.2 14.6628 11.2 14V2.00005C11.2 1.33731 10.6628 0.800049 10 0.800049H1.60002Z" fill="#6B7280" />
              <path d="M14.8 4.40005C14.1373 4.40005 13.6 4.93731 13.6 5.60005V12.8601C13.7939 12.8207 13.9945 12.8 14.2 12.8C15.6514 12.8 16.8621 13.8307 17.14 15.2H18.4C19.0628 15.2 19.6 14.6628 19.6 14V8.00005C19.6 7.68179 19.4736 7.37656 19.2486 7.15152L16.8486 4.75152C16.6235 4.52648 16.3183 4.40005 16 4.40005H14.8Z" fill="#6B7280" />
            </svg>
            Shipments
          </li>
          <li className="sidebar__listItem">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 0.903076L7.60002 5.70308V21.0972L12.4 16.2972V0.903076Z" fill="#6B7280" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44855 2.9516C2.10535 2.60841 1.58921 2.50574 1.1408 2.69148C0.692395 2.87721 0.400024 3.31478 0.400024 3.80013V15.8001C0.400024 16.1184 0.526453 16.4236 0.751496 16.6487L5.20002 21.0972V5.70308L2.44855 2.9516Z" fill="#6B7280" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2486 5.3516L14.8 0.903076V16.2972L17.5515 19.0487C17.8947 19.3919 18.4108 19.4945 18.8592 19.3088C19.3077 19.1231 19.6 18.6855 19.6 18.2001V6.20013C19.6 5.88187 19.4736 5.57665 19.2486 5.3516Z" fill="#6B7280" />
            </svg>
            Tracking
          </li>
          <li className="sidebar__listItem">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.800049 2.7999C0.800049 1.47442 1.87457 0.399902 3.20005 0.399902H8.70299C9.33951 0.399902 9.94996 0.652759 10.4 1.10285L14.4971 5.1999C14.9472 5.64999 15.2 6.26044 15.2 6.89696V17.1999C15.2 18.5254 14.1255 19.5999 12.8 19.5999H3.20005C1.87456 19.5999 0.800049 18.5254 0.800049 17.1999V2.7999ZM3.20005 9.9999C3.20005 9.33716 3.73731 8.7999 4.40005 8.7999H11.6C12.2628 8.7999 12.8 9.33716 12.8 9.9999C12.8 10.6626 12.2628 11.1999 11.6 11.1999H4.40005C3.73731 11.1999 3.20005 10.6626 3.20005 9.9999ZM4.40005 13.5999C3.73731 13.5999 3.20005 14.1372 3.20005 14.7999C3.20005 15.4626 3.73731 15.9999 4.40005 15.9999H11.6C12.2628 15.9999 12.8 15.4626 12.8 14.7999C12.8 14.1372 12.2628 13.5999 11.6 13.5999H4.40005Z" fill="#6B7280" />
            </svg>
            Documents
          </li>
          <li className="sidebar__listItem">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.800049 2.7999C0.800049 1.47442 1.87457 0.399902 3.20005 0.399902H8.70299C9.33951 0.399902 9.94996 0.652759 10.4 1.10285L14.4971 5.1999C14.9472 5.64999 15.2 6.26044 15.2 6.89696V17.1999C15.2 18.5254 14.1255 19.5999 12.8 19.5999H3.20005C1.87456 19.5999 0.800049 18.5254 0.800049 17.1999V2.7999ZM3.20005 9.9999C3.20005 9.33716 3.73731 8.7999 4.40005 8.7999H11.6C12.2628 8.7999 12.8 9.33716 12.8 9.9999C12.8 10.6626 12.2628 11.1999 11.6 11.1999H4.40005C3.73731 11.1999 3.20005 10.6626 3.20005 9.9999ZM4.40005 13.5999C3.73731 13.5999 3.20005 14.1372 3.20005 14.7999C3.20005 15.4626 3.73731 15.9999 4.40005 15.9999H11.6C12.2628 15.9999 12.8 15.4626 12.8 14.7999C12.8 14.1372 12.2628 13.5999 11.6 13.5999H4.40005Z" fill="#6B7280" />
            </svg>
            Rates
          </li>
          <li className="sidebar__listItem">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.79998 0.399902C6.47449 0.399902 5.39998 1.47442 5.39998 2.7999V12.3999C5.39998 13.7254 6.47449 14.7999 7.79998 14.7999H15C16.3255 14.7999 17.4 13.7254 17.4 12.3999V5.69696C17.4 5.06044 17.1471 4.44999 16.697 3.9999L13.8 1.10285C13.3499 0.652759 12.7394 0.399902 12.1029 0.399902H7.79998Z" fill="#6B7280" />
              <path d="M0.599976 7.5999C0.599976 6.27442 1.67449 5.1999 2.99998 5.1999V17.1999H12.6C12.6 18.5254 11.5255 19.5999 10.2 19.5999H2.99998C1.67449 19.5999 0.599976 18.5254 0.599976 17.1999V7.5999Z" fill="#6B7280" />
            </svg>
            Quotes
          </li>
          <li className="sidebar__listItem">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20005 0.399902C1.87457 0.399902 0.800049 1.47442 0.800049 2.7999V17.1999C0.800049 18.5254 1.87456 19.5999 3.20005 19.5999H12.8C14.1255 19.5999 15.2 18.5254 15.2 17.1999V6.89696C15.2 6.26044 14.9472 5.64999 14.4971 5.1999L10.4 1.10285C9.94996 0.652759 9.33951 0.399902 8.70299 0.399902H3.20005ZM4.40005 9.9999C3.73731 9.9999 3.20005 10.5372 3.20005 11.1999C3.20005 11.8626 3.73731 12.3999 4.40005 12.3999H11.6C12.2628 12.3999 12.8 11.8626 12.8 11.1999C12.8 10.5372 12.2628 9.9999 11.6 9.9999H4.40005Z" fill="#6B7280" />
            </svg>
            Support
          </li>
        </ul>
      </div>
      {/* <Menu
        mode="inline" 
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      /> */}
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0, borderBottom: "1px solid #E5E7EB", height: 75 }} />
      <Content style={{ margin: '0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 710 }}>
          content
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default LayoutBuilder;


// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import React from 'react';

// import OnePortLogo from "../../assets/oneportLogo.png";

// import "./index.css";

// const { Header, Content, Sider } = Layout;

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );

// const LayoutBuilder: React.FC = () => (
//   <Layout style={{ height: 100 }}>
//     <Header className="layout__header">
//       {/* <div className="logo"> */}

//       {/* </div> */}
//       {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
//     </Header>
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={broken => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <img className="oneportLogo" src={OnePortLogo} alt="oneportLogo" style={{ width: 120, height: 41 }} />
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           style={{ height: '100%', borderRight: 0 }}
//           items={items2}
//         />

//       </Sider>
//       <Layout style={{ padding: '0' }}>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 750,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>
// );

// export default LayoutBuilder;