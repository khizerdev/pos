import { Layout , Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    CopyOutlined,
    UnorderedListOutlined,
    LoginOutlined,
    ShoppingCartOutlined,
  } from "@ant-design/icons";
import React, { useState } from 'react';
import '../resources/Layout.css'
import '../App.css';
import { Link } from 'react-router-dom';

function Main(props) {

    const [collapsed, setCollapsed] = useState(false)

    const { Header, Sider, Content } = Layout;

    const toggle = () => {
    setCollapsed(!collapsed)
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>

                    <Link to="/home">Dashboard</Link>
                
                </Menu.Item>
                <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
                    <Link to="/cart">Cart</Link>
                </Menu.Item>
                <Menu.Item key="/bills" icon={<CopyOutlined />}>

                    <Link to="/bills">Bills</Link>

                </Menu.Item>
                <Menu.Item key="/products" icon={<UnorderedListOutlined />}>

                    <Link to="/products">Products</Link>

                </Menu.Item>
                <Menu.Item key="/customers" icon={<UserOutlined />}>

                    <Link to="/customers">Customers</Link>
                </Menu.Item>

                <Menu.Item key="/logout" icon={<LoginOutlined />}>

                Logout
                    
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
            
                    {props.children}
                </Content>
            </Layout>
      </Layout>
  )
}

export default Main