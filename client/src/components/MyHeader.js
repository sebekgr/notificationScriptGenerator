import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Loadable from 'react-loadable';
import Loading from './Loading';
const AsyncToolBox = Loadable({
    loader: () => import('./EditorTool/ToolBox'),
    loading: Loading
});

const MyHeader = ({ location }) => {

    return(
        <Menu mode="horizontal" >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/profile/editor">Editor</Link></Menu.Item>
            {location === "/profile/editor"  ?
            <AsyncToolBox key="menutoolbox" />
            : null}
        </Menu>
    )
        
        

};

export default MyHeader;