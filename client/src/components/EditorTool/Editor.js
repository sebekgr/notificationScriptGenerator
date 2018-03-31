import React, { Component } from 'react';
import PropertyBox from './PropertyBox';
import Preview from './Preview';
import { connect } from 'react-redux';
import { Layout} from 'antd';
const {   Sider } = Layout;

class Editor extends Component {

    render() {
        return[
                <Sider key="sider">
                    
                        <PropertyBox />
                    
                </Sider>
            ,
                <Preview key="preview" />

        ]
    }
}

const mapStateToProps = ({ elements, mainCanvas }) => {
    return { elements, mainCanvas };
}

export default connect(mapStateToProps)(Editor);