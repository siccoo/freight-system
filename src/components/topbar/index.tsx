import React from 'react'
import { Layout } from 'antd';
import NotificationIcon from "../../assets/notificationIcon.svg";
import ImageIcon from "../../assets/imageIcon.png";

import "./index.css";

const { Header } = Layout;

const Topbar = () => {
    return (
        <Header className="site-layout-sub-header-background"
            style={{
                padding: "0px 40px 0px 40px",
                borderBottom: "1px solid #E5E7EB",
                height: 85,
                background: "#ffffff",
                // position: "sticky",
                // top: 0,
                // zIndex: 350
            }}>
            <div className='topbar__wrapper'>
                <div className='topbar__left'>
                    <p>Customers</p>
                </div>
                <div className='topbar__right'>
                    <div className="icons__container">
                        <img className='notify' src={NotificationIcon} alt="notify" />
                        <span className="badge">2</span>
                    </div>
                    <div>
                        <img className='topbar__avatar' src={ImageIcon} alt="" />
                        <select name="" id="">
                            <option value="">Temoc</option>
                        </select>
                    </div>
                </div>

            </div>
        </Header>
    )
}

export default Topbar;