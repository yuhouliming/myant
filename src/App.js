import React from 'react';
import {Component} from 'react';
import {Button} from 'antd';
import './App.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">博客</Menu.Item>
                        <Menu.Item key="3">私藏</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user"/>
                                         今日头条
                                     </span>
                                     }
                            >
                                <Menu.Item key="1">科技</Menu.Item>
                                <Menu.Item key="2">娱乐</Menu.Item>
                                <Menu.Item key="3">数码</Menu.Item>
                                <Menu.Item key="4">美食</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                <Icon type="laptop"/>
                腾讯
              </span>
                                }
                            >
                                <Menu.Item key="5">中国</Menu.Item>
                                <Menu.Item key="6">美国</Menu.Item>
                                <Menu.Item key="7">法国</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                <Icon type="notification"/>
                网易
              </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}


export default App;
