import React, { useEffect, useState } from 'react'
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SiderLayout from '../../components/sidebar';

import ArrowLeft from "../../assets/arrowLeftIcon.svg";
import Icon from "../../assets/imageIcon.png"

import "./index.css";
import { Link } from 'react-router-dom';
import makeAPICall from "../../utils/config";

interface SingleCustomerShipmentData {
    _id: string;
    shipping_type: string;
    origin_port_city: string;
    destination_port_city: string;
    shipment_pickup_date: string;
}

interface SingleCustomerData {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    Avatar: string;
}

const columns: ColumnsType<SingleCustomerShipmentData> = [
    {
        title: 'Shipment Type',
        dataIndex: 'shipping_type',
        key: 'shipping_type',
        render: (shipping_type, data) => {
            return (
                <div>
                    <img className='customers-avatar' src={Icon} alt="" />
                    {shipping_type}
                </div>
                // <a href="/">{text}</a>
            )
        },
    },
    {
        title: 'Origin',
        dataIndex: 'origin_port_city',
        key: 'origin_port_city',
    },
    {
        title: 'Destination',
        dataIndex: 'destination_port_city',
        key: 'destination_port_city',
    },
    {
        title: 'Shipment Date',
        dataIndex: 'shipment_pickup_date',
        key: 'shipment_pickup_date',
    },
    {
        title: 'Shipping ID',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: '',
        key: 'action',
        render: () => {

            return (
                <Space size="middle">
                    {/* <Link to="/shipments" className='space-action' >Shipment</Link> */}
                    <Link to="/shipment-details" className='space-action-green'>View Details</Link>
                </Space>
            )
        },
    },
];

const Shipments: React.FC = () => {
    const [shipmentData, setShipmentData] = useState(null);
    const [customersData, setCustomersData] = useState<SingleCustomerData>()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSingleCustomer()

        getSingleCustomerShipment()
    }, []);

    const getSingleCustomer = () => {
        setLoading(true);
        return makeAPICall({
            path: `get_single_customer/123456789`,
            method: "GET",
        })
            .then((data) => {
                setCustomersData(data);
                setLoading(false);
                console.log(data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }

    const getSingleCustomerShipment = () => {
        setLoading(true);
        return makeAPICall({
            path: `get_single_customer_shipments/123456789`,
            method: "GET"
        }).then((data) => {
            setShipmentData(data);
            console.log(data);
        }).catch((err) => {
            setLoading(false);
            console.log(err);

        })
    }

    return (
        <SiderLayout>
            <div className="site-layout-background" style={{ padding: "40px 40px", minHeight: 710 }}>
                <Link className='shipment-back' to="/">
                    <img src={ArrowLeft} alt="" />
                </Link>
                {loading ? "loading..." : (
                    <>
                    {!customersData ? ("No data") : (
                        <div className='shipment__container'>
                            <div className='shipment__container--image'>
                                <img src={customersData.Avatar} alt="" style={{ marginRight: 10 }} />
                                <div>
                                    <p className='bold'>{customersData.first_name}</p>
                                    <p>{customersData.email}</p>
                                    <p>{customersData.phone}</p>
                                </div>
                            </div>
                            <div>
                                <span className='shipment__container--edit'>Edit</span>
                            </div>
                        </div>
                    )} : {
                        !shipmentData ? ("No data") : (
                            <>
                            <div className='shipment__border'>
                            <div className='shipment-spacing'>
                                <button className='new-shipment'>Add New Shipment {" "} +</button>
                                <select className='shipment-select' name="" id="">
                                    <option value="">Shipment Type</option>
                                </select>
                                <select className='shipment-select' name="" id="">
                                    <option value="">Shipment Date</option>
                                </select>
                            </div>
                            <div className='shipment-search'>
                                <form className="nosubmit">
                                    <input className="nosubmit" type="search" placeholder="Search by shipment ID, Destination" />
                                </form>
                            </div>
                        </div>
                        <Table columns={columns} dataSource={shipmentData} />
                        </>
                        )
                    }
                        
                        
                    </>
                )}
            </div>
        </SiderLayout>

    )
}

export default Shipments;