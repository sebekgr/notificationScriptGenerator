import React from 'react';

const IMGComponent =({style, onDelete, src, onSelect}) => {
    return (
        <div className="componentWrapper" >
                <img src={src} style={style} onClick={onSelect} alt="default"/>
                <button className="deleteComponentBtn" onClick={onDelete}>x</button>
            </div>
        )
}

export default IMGComponent;