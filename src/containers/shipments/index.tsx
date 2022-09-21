import React from 'react'
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SiderLayout from '../../components/sidebar';

import ArrowLeft from "../../assets/arrowLeftIcon.svg";
import Icon from "../../assets/imageIcon.png"

import "./index.css";
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    shipping_type: string;
    origin_port_city: string;
    destination_port_city: string;
    shipment_pickup_date: string;
    _id: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Shipment Type',
        dataIndex: 'shipping_type',
        key: 'shipping_type',
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
        render: (_: any, record: any) => {

            // eslint-disable-next-line react-hooks/rules-of-hooks
            // const [shipmentDetails, setShipmentDetails] = useState(true);

            // const switchToShipmentDetails = () => {
            //     setShipmentDetails(true)
            // }

            return (
            <Space size="middle">
                {/* <Link to="/shipments" className='space-action' >Shipment</Link> */}
                <Link to="/shipment-details" className='space-action-green'>View Details</Link>
            </Space>
        )},
    },
];

const data: DataType[] = [
    {
        key: '1',
        shipping_type: 'Export',
        origin_port_city: 'NGAPP, Lagos, Nigeria',
        destination_port_city: 'Arlington, VA, USA',
        shipment_pickup_date: "Apr 02, 2022",
        _id: 588393926

    },
    {
        key: '2',
        shipping_type: 'Import',
        origin_port_city: 'Arlington, VA, USA',
        destination_port_city: 'NGAPP, Lagos, Nigeria',
        shipment_pickup_date: "Apr 02, 2022",
        _id: 588393926

    }
];

const Shipments: React.FC = () => {
    // const [shipmentDetails, setShipmentDetails] = useState(true);

    // const switchToShipmentDetails = () => {
    //     setShipmentDetails(true)
    // }

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
                            <p className='bold'>Albert Flores</p>
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