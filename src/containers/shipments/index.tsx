import React from 'react'
import { Layout } from 'antd';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SiderLayout from '../../components/sidebar';

import ArrowLeft from "../../assets/arrowLeftIcon.svg";
import Icon from "../../assets/imageIcon.png"

import "./index.css";
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    last_login: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
        render: (text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
            return (
                <div>
                    <img className='customers-avatar' src={Icon} alt="" />
                    {text}
                </div>
                // <a href="/">{text}</a>
            )
        },
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Email Address',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Last Login',
        dataIndex: 'last_login',
        key: 'last_login',
    },
    {
        title: '',
        key: 'action',
        render: (_: any, record: any) => (
            <Space size="middle">
                <Link to="/shipments" className='space-action' >Shipment</Link>
                <Link to="/" className='space-action-green'>Edit</Link>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        first_name: 'Adewumi',
        last_name: 'Adebayo',
        email: 'debaryour@gmail.com',
        phone: "08087656543",
        last_login: 'Apr 02, 2022'

    },
    {
        key: '2',
        first_name: 'Albert',
        last_name: 'Flores',
        email: 'deanna.curtis@example.com',
        phone: "07037656543",
        last_login: 'Apr 02, 2022'

    }
];

const Shipments: React.FC = () => {
    return (
        <SiderLayout>
            <div className="site-layout-background" style={{ padding: "40px 40px", minHeight: 710 }}>
                <Link className='shipment-back' to="/">
                    <img src={ArrowLeft} alt="" />
                </Link>
                <div className='shipment__container'>
                    <div className='shipment__container--image'>
                        <img src={Icon} alt="" style={{ marginRight: 10 }} />
                        <div>
                            <h6>Albert Flores</h6>
                            <p>deanna.curtis@example.com</p>
                            <p>07037656543</p>
                        </div>
                    </div>
                    <div>
                        <span className='shipment__container--edit'>Edit</span>
                    </div>
                </div>
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
                <Table columns={columns} dataSource={data} />
            </div>
        </SiderLayout>

    )
}

export default Shipments;