import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import LoginBtn from './LoginBtn';

class Home extends Component {

  state={
    currentIndex: 0,
    description: [
      'Login with google account',
      'Customize your Popup by adding an elements',
      'Hove you done it? Just generate script',
      'Attach script onto your page and Enjoy !'
    ]
 
    }
    


  change(nr){
    this.setState({currentIndex: nr});
  }

  render(){
    const settings = {
      autoplaySpeed: 5000,
      swipeToSlide: true,
      lazyLoad: true
    };
    return (
      <div className="homeWrapper">
        <div className="welcomeBox">
          <h1> Welcome to Popup Generator Demo</h1>
          <h2> Build your own Popup <br/> with 4 simply steps</h2>
          <h3 className="info">#{this.state.currentIndex+1} {this.state.description[this.state.currentIndex]}</h3>
        </div>
        <Carousel afterChange={e => this.change(e)} {...settings}>
          <div><LoginBtn /></div>
          <div className="prev"></div>
          <div className="prev2"></div>
          <div className="prev3"></div>
        </Carousel>
    </div>
    )
  }
  
}
  

const mapStateToProps = ({ auth}) => {
  return { auth };
}

export default connect(mapStateToProps)(Home);