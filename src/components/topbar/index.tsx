import React from 'react'
import { Layout } from 'antd';
import NotificationIcon from "../../assets/notificationIcon.svg"

const { Header } = Layout;

const Topbar = () => {
    return (
        <Header className="site-layout-sub-header-background" style={{ padding: 0, borderBottom: "1px solid #E5E7EB", height: 75, background: "#ffffff" }}>
            <div className='topbar__wrapper'>
                <div className='topbar__left'>

                </div>
                <div className='topbar__right'>
                    <div className="icons__container">
                        <img className='notify' src={NotificationIcon} alt="notify" />
                        <span className="badge">2</span>
                    </div>
                    <div>

                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                </div>

            </div>
        </Header>
    )
}

export default Topbar;