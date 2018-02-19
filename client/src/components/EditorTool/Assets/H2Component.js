import React from 'react';

const H2Component = ({style, onDelete, content, onSelect}) => {
    return (
        <div className="componentWrapper" >
                <h2 style={style} onClick={onSelect}>{content}</h2>
                <button className="deleteComponentBtn" onClick={onDelete}>x</button>
            </div>
        )
}

export default H2Component;