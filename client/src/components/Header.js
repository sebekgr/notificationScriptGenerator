import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return 'still deciding';
            case false:
                return 'im loggedout';
            default:
                return 'im logged in';
        }
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/profile/newscript">Create script</Link>
            </div>
        )
    }
    
}

const mapStateToProps = ({auth}) => {
     
    return {auth};
    
}

export default connect(mapStateToProps)(Header);