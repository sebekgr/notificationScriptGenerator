import React from 'react';
import { Link } from 'react-router-dom';
import ToolBox from './EditorTool/ToolBox';

const MyHeader = ({ auth, location }) => (


    <ul>
       <Link to="/">Home</Link>

        {auth ?
            [
               <Link key="profile" to="/profile">Profile</Link>,
               <Link key="editor" to="/profile/editor">Editor</Link>
            ]
            : null}

        {location === "/profile/editor" ?
            <ToolBox key="menutoolbox" />
            : null}

    </ul>


);

export default MyHeader;