'use client'
import { Layout } from 'antd';


const AdminFooter = () => {
    const { Footer} = Layout;
    const currentYear = new Date().getFullYear();
    return (
            <Footer style={{ textAlign: 'center' }}>
                HongNeu ©{currentYear} Created by HongNeu
            </Footer>
    )
}

export default AdminFooter;