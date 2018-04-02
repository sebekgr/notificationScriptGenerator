import React, { Component, Fragment } from 'react';
import PropertyBox from './PropertyBox';
import Preview from './Preview';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Sider } = Layout;

class Editor extends Component {

    render() {
        return (
            <Fragment>
                <Sider>
                    <PropertyBox />
                </Sider>
                <Preview/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ elements, mainCanvas }) => {
    return { elements, mainCanvas };
}

export default connect(mapStateToProps)(Editor);