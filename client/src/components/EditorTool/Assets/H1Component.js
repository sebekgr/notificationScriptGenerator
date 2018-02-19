import React from 'react';

const H1Component = ({style, onDelete, content, onSelect}) => {
    return (
        <div className="componentWrapper" >
                <h1 style={style} onClick={onSelect}>{content}</h1>
                <button className="deleteComponentBtn" onClick={onDelete}>x</button>
            </div>
        )
}

export default H1Component;