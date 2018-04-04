import React, { Component, Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Input} from 'antd';


class CopyToCliboard extends Component {


    state = { copied: false }

    componentWillUnmount(){
        this.setState({copied: false});
    }

    render() {
        return (
            <Fragment>
            <CopyToClipboard onCopy={() => this.setState({ copied: true })} text={this.props.text}>
                <Input
                    readOnly={true}
                    defaultValue={this.props.text}
                    onFocus={e => e.target.select()}
                />
                
            </CopyToClipboard>
            {this.state.copied ? <span style={{ color: 'green' }}>Link has been copied to clipboard</span> : null}
        </Fragment>
        )
        
    }
}

export default CopyToCliboard;