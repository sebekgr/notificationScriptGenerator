import React from 'react';

const  ComponentElement = ({active, onSelect, content, elemType: Element, style, onHover}) => {
    const element =
        (Element === "img" ?
        // eslint-disable-next-line
        (<Element onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element' : 'element'} onClick={onSelect} src={content} style={style} />)
        // eslint-disable-next-line
        : (<Element  onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element' : 'element'} onClick={onSelect} style={style} > {content} </Element>)
        );
        return element;

}
export default ComponentElement;
