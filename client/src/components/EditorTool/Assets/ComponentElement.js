import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import {Popover, Icon} from 'antd';

const styleDelete = {fontSize:"24px", color: 'red'}
const  ComponentElement = SortableElement(({active, onSelect, content, elemType: Element, style, onDelete}) => {

    switch(Element) {
        case 'img':
            return (
                <span>
                    <Popover placement="left" content={<Icon style={styleDelete} type="delete" onClick={onDelete}/>} >
                        <Element onClick={onSelect} className={active ? 'active element': 'element'} src={content} style={style} />
                    </Popover>
            
                </span>)
        case 'form':
            return (
                <form onClick={onSelect} onSubmit={(e) => {e.preventDefault();}} style={style.formStyle} className={active ? 'active element': 'element'}>
                    <Popover placement="left" content={<Icon style={styleDelete} type="delete" onClick={onDelete}/>} >
                        <input style={style.inputStyle} type="text" placeholder={content.input} />
                        <button style={style.submitStyle} type="submit">{content.submit}</button>
                    </Popover>
                </form>
            );
        case 'h1':
        case 'h2':
        case 'div':
        case 'p':
        return <Element onClick={onSelect} className={active ? 'active element': 'element'} style={style} >
                    <Popover placement="left" content={<Icon style={styleDelete} type="delete" onClick={onDelete}/>} >
                        {content} 
                    </Popover>
                </Element>

        default:
            return <p>cool :)</p>
    }
});


export default ComponentElement;