import React from 'react';
import { Layout } from 'antd';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import "./index.css"

const { Content } = Layout;

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
        render: text => <a>{text}</a>,
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
    // {
    //     title: 'Email Address',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map(tag => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: '',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a className='space-action'>Shipment</a>
                <a className='space-action'>Edit</a>
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

const Customers: React.FC = () => {
    return (
        <Content style={{ margin: '0' }}>
            <div className="site-layout-background" style={{ padding: "40px 40px", minHeight: 710 }}>
                <button type='submit'>Add Customer {" "} +</button>
                <Table columns={columns} dataSource={data} />
            </div>
        </Content>
    )
}

export default Customers; 