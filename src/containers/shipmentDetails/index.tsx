import React, { useState } from 'react'
import {  Tabs } from 'antd';
import { Link } from 'react-router-dom'
import SiderLayout from '../../components/sidebar'
import ArrowLeft from "../../assets/arrowLeftIcon.svg";

import "./index.css"

const ShipmentDetails: React.FC = () => {

    return (
        <SiderLayout>
            <div className="site-layout-background" style={{ padding: "40px 40px", minHeight: 710 }}>

                <div className='shipment-back-box'>
                    <Link className='shipment-back' to="/shipments">
                        <img src={ArrowLeft} alt="" />
                        <p>Shipment Details</p>
                    </Link>
                    <div className='shipment-box-button'>
                        <button>Invoice</button>
                        <button>
                            Track/Update Shipment
                        </button>
                    </div>
                </div>

                <div>

                </div>

                <div className='tab'>
                    <Tabs className='shipment-tab' defaultActiveKey="1">
                        <Tabs.TabPane className='shipment-tabpane' tab="Documents" key="1">
                            <div className='shipmentDetails__border'>
                                <p>Uploaded Documents</p>
                                <div className='shipmentDetails-spacing'>
                                    <button className='newDetails-shipment'>Request Document</button>
                                    <button>Update Document</button>
                                   
                                </div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane className='shipment-tabpane' tab="Cargo Details" key="2">
                            Content of Tab Pane 2
                        </Tabs.TabPane>
                        <Tabs.TabPane className='shipment-tabpane' tab="Additional Services" key="3">
                            Content of Tab Pane 3
                        </Tabs.TabPane>
                        <Tabs.TabPane className='shipment-tabpane' tab="Rates" key="4">
                            Content of Tab Pane 3
                        </Tabs.TabPane>
                    </Tabs>
                </div>



            </div>
        </SiderLayout>
    )
}

export default ShipmentDetails;