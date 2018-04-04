import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render(){
    return (
      <Fragment>
      <h1>Home</h1>
      <p>Welcome home!</p>
     
    </Fragment>
    )
  }
  
}
  

const mapStateToProps = ({ auth}) => {
  return { auth };
}

export default connect(mapStateToProps)(Home);