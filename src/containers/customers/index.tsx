import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SiderLayout from '../../components/sidebar';
import makeAPICall from '../../utils/config';

import "./index.css";

// import Icon from "../../assets/imageIcon.png"
import { Link } from 'react-router-dom';

interface AllCustomersData {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    Avatar: string;
}

const columns: ColumnsType<AllCustomersData> = [
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
        render: (first_name, data) => {
            return (
                <div>
                    <img className='customers-avatar' src={data.Avatar} alt="" />
                    {first_name}
                </div>
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
        render: () => {
            return (
                <p>April 2, 2022</p>
            )
        },
    },
    {
        title: '',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Link to="/shipments" className='space-action' >Shipment</Link>
                <Link to="/" className='space-action-green'>Edit</Link>
            </Space>
        ),
    },
];

const Customers: React.FC = () => {
    const [customersData, setCustomersData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCustomers = () => {
        setLoading(true);
        return makeAPICall({
            path: `get_customers`,
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

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <SiderLayout>
            <div className="site-layout-background" style={{ padding: "40px 40px", minHeight: 710 }}>
                <button type='submit'>Add Customer {" "} +</button>
                {loading ? 'loading...' : (
                    <div>
                        {!customersData ? ("No data") : (<Table columns={columns} dataSource={customersData} />)}
                    </div>
                )}
            </div>
        </SiderLayout>

    )
}

export default Customers; 