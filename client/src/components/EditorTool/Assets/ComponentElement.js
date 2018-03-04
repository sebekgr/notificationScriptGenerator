import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
const  ComponentElement = SortableElement(({active, onSelect, content, elemType: Element, style, onHover}) => {

    switch(Element) {
        case 'img':
            return <Element onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element': 'element'} src={content} style={style} />
        case 'form':
            return (
                <form onClick={onSelect} onMouseEnter={onHover} style={style.formStyle} className={active ? 'active element': 'element'}>
                    <input style={style.inputStyle} type="text" placeholder={content.input}/>
                    <button style={style.submitStyle} type="submit">{content.submit}</button>
                </form>
            );
        case 'h1':
        case 'h2':
        case 'span':
        case 'p':
        return <Element onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element': 'element'} style={style} > {content} </Element>

        default:
            return <Element onMouseEnter={onHover} onClick={onSelect} className={active ? 'active element': 'element'} style={style} > {content} </Element>
    }
});


export default ComponentElement;