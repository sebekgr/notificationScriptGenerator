import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card,  Popconfirm, Button  } from 'antd';
import { Link } from 'react-router-dom';
import CopyClipboard from './EditorTool/Assets/CopyClipboard';
import * as actions from '../actions';
const { Meta } = Card;
class Profile extends Component {

  componentDidMount(){
    
    this.props.fetchUser();
    const { script } = this.props.auth;
    if(script === ''){
      localStorage.clear();
    }
  }

  isScript(script, host) {
    return (
      <Fragment>
        <p>You already have one script for: </p>
        <p><a href={host}>{host}</a></p>
        <CopyClipboard text={`<script async src="${window.location.origin}/script/${script}"></script>`} />
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
    localStorage.clear();
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
    const { username, avatar, script, host } = this.props.auth;

    const myScript = script === '' ? this.isNot() : this.isScript(script, host);

    return (


      <div className="profileBox">

        <Card
          style={{margin: 'auto', width: '360px'}}
          title="Welcome"
          
        hoverable extra={<Button href="/auth/logout">Logout</Button>}>
          <Meta
            avatar={<img alt="Avatar" src={avatar} />}
            title={username}
            description={this.deleteProfile()}
          />
          

          <div className="scriptWrapper"> {myScript}</div>
        </Card>
      </div>
    )
  }

}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, actions)(Profile);