import React from 'react';
import { Icon } from 'antd';

const MyFooter = () => (
    <footer className="footer">
        <ul className="footer-list">
            <li><span>Popup Generator ©{new Date().getFullYear()} Created by Sebastian Gralikowski</span></li>
            <li><a href="https://github.com/sebekgr" title="Check my github"><Icon type="github" style={{ color: 'black' }} /></a></li>
            <li><a href="https://twitter.com/" title="Text me via Twitter"><Icon type="twitter" style={{ color: '#40a9ff' }} /></a></li>
        </ul>
    </footer>
)

export default MyFooter

