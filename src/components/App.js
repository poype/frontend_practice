import React from "react";
import { Button, Space, Layout } from 'antd';
import { WechatOutlined, AlipayCircleOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout;


class App extends React.Component {

    render() {
        return (
            <>
                <Space wrap>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>

                    <WechatOutlined />
                    <AlipayCircleOutlined />
                </Space>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider style={{backgroundColor: "green"}}>
                        Sider
                    </Sider>
                    <Layout>
                        <Header style={{backgroundColor: "red"}}>Header</Header>
                        <Content>Content</Content>
                        <Footer style={{backgroundColor: "blue"}}>Footer</Footer>
                    </Layout>
                </Layout>
            </>
            
        )
    }
}

export default App;