import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const  ComponentElement = SortableElement(({active, onSelect, content, elemType: Element, style, onHover}) => {
    const element =
        (Element === "img" ?
        // eslint-disable-next-line
        (<Element onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element': 'element'} src={content} style={style} />)
        // eslint-disable-next-line
        : (<Element onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element': 'element'} style={style} > {content} </Element>)
        );
        return element;

});
export default ComponentElement;
