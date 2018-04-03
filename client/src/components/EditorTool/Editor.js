import React from 'react';
import PropertyBox from './PropertyBox';
import Preview from './Preview';
import { Layout } from 'antd';
const { Sider} = Layout;
const Editor = () => {
    return (
        <Layout style={{height:'100%'}}>
            <Sider width="300" style={{overflow: 'auto', background: '#f9f9f9'}}>
                <PropertyBox />
            </Sider>
                <Preview />
        </Layout>

    )
}

export default Editor;