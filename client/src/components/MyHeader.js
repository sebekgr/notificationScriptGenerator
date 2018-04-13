import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import Loadable from 'react-loadable';
import Loading from './Loading';
const SubMenu = Menu.SubMenu;


const AsyncToolBox = Loadable({
    loader: () => import('./EditorTool/ToolBox'),
    loading: Loading
});

class MyHeader extends Component {

    state = {current: 'sub1'}

    handleClick = (e) => {
        console.log(e.key);
    }
    renderToolBox = () => <SubMenu key="sub1" title="Elements"><AsyncToolBox key="menutoolbox" /></SubMenu>

    render(){
        const {location} = this.props;
        return(
            
            <Menu mode="horizontal">
                
                {location === '/profile/editor' ? this.renderToolBox() : null}
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/profile/editor">Editor</Link></Menu.Item>
                
            </Menu>
        )
    }
};

export default MyHeader;