import React from 'react'
import { Layout } from 'antd';
import SiderLayout from '../../components/sidebar';

const { Content } = Layout;

const Shipments: React.FC = () => {
    return (
        <SiderLayout>
            <div className="site-layout-background" style={{ padding: "40px 40px", minHeight: 710 }}>
                index
            </div>
        </SiderLayout>

    )
}

export default Shipments;