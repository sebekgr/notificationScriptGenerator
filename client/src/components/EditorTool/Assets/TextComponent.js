import React from 'react';

const TextComponent = ({style, onDelete, content, onSelect}) => {
        return (
            <div className="componentWrapper" >
                <p style={style} onClick={onSelect}>{content}</p>
                <button className="deleteComponentBtn" onClick={onDelete}>x</button>
            </div>
        )
}

export default TextComponent;