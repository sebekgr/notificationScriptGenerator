import React from 'react';

const  ComponentElement = ({active, onSelect, content, elemType: Element, style}) => {
    const element =
        (Element === "img" ?
        (<Element onClick={onSelect} className={active ? 'active element' : 'element'} onClick={onSelect} src={content} style={style} />)
        : (<Element onClick={onSelect} className={active ? 'active element' : 'element'} onClick={onSelect} style={style} > {content} </Element>)
        );
        return element;

}
export default ComponentElement;
