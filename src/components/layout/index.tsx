import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';

import OnePortLogo from "../../assets/oneportLogo.png";

import "./index.css";

const { Header, Content, Footer, Sider } = Layout;

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
      <Menu
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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