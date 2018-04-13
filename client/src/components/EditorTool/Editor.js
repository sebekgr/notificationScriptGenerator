import React from 'react';
import PropertyBox from './PropertyBox';
import Preview from './Preview';
import { Layout, } from 'antd';
const { Sider } = Layout;

const Editor = () => {
    return (
        <Layout className="editorBox">
            <Sider
                width={300}
                style={{background: '#f9f9f9'}}
                breakpoint="md"
                collapsedWidth="0"
            >
                <PropertyBox />
            </Sider>

            <Preview />



        </Layout>

    )
}

export default Editor;