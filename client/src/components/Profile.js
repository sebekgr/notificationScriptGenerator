import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Avatar, List, Popconfirm, Icon, Button  } from 'antd';
import { Link } from 'react-router-dom';
import CopyClipboard from './EditorTool/Assets/CopyClipboard';
import * as actions from '../actions';
const { Meta } = Card;
class Profile extends Component {


  isScript(script) {
    return (
      <Fragment>
        <p>You have one script</p>
        <CopyClipboard text={`${window.location.origin}/script/${script}`} />
      </Fragment>
    )
  }

  isNot(){
    return(
      <Fragment>
    <p>You don't have so far any script. Go to Editor and start creation</p>
    <Link to="/profile/editor">Jump to editor</Link>
    </Fragment>
    )
    
  }

  handleDeleteProfile(){
    console.log("kasuje")
    this.props.deleteUser(this.props.auth._id);
  }

  deleteProfile(){

    return (
      <Popconfirm title="Are you sure？" okText="Yes" cancelText={"No"} onConfirm={() => this.handleDeleteProfile()}>
       <Button size="small" type="danger" ghost>
          Delete Account
          </Button>
      </Popconfirm>
    )

  }


  render() {
    const { username, avatar, host, script } = this.props.auth;

    const myScript = script === '' ? this.isNot() : this.isScript(script);

    return (


      <div className="profileBox">

        <Card
          title="Welcome"
        hoverable extra={this.deleteProfile()}>
          <Meta
            avatar={<img src={avatar} />}
            title={username}
          >

          </Meta>
          <div style={{ width: '400px', marginTop: '20px' }}> {myScript}</div>
        </Card>
      </div>
    )
  }

}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, actions)(Profile);