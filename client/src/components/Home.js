import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';
const Step = Steps.Step;

const steps = [
  {title: 'Login', description: 'Login super fast with Google Account'},
  {title: 'Create', description: 'Add and customize your elements'},
  {title: 'Generete', description: 'Generete your own script'},
  {title: 'Done', description: 'Attach script to your website'}

]

class Home extends Component {

  state={index: 0}

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.index === 3) {
      this.setState({index: 0})
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }
    
  }

  render(){

    return (
      <div className="homeWrapper">
          <h1> Welcome to Popup Generator Demo</h1>
          <h2> Build your own Popup with 4 simply steps</h2>
        <Steps style={{width: 'auto'}} direction="vertical" current={this.state.index}>
            {steps.map( ({title, description}, i) => <Step key={i} title={title} description={description} />)}
        </Steps>
        <p>Source code available on  <a href="https://github.com/sebekgr/notificationScriptGenerator">github</a></p>
    </div>
    )
  }
  
}
  

const mapStateToProps = ({ auth}) => {
  return { auth };
}

export default connect(mapStateToProps)(Home);