import React from 'react';
const  ComponentElementTester = ({content, elemType: Element, style, onSubmit}) => {

    switch(Element) {
        case 'img':
            return <Element className="element" src={content} style={style} />
        case 'form':
            let formS = Object.assign({}, style.formStyle, {display: 'inline-block'})
            return (
                <form onSubmit={onSubmit} style={formS} action={content.action} className="lol">
                    <input style={style.inputStyle} type="email" placeholder={content.input} required/>
                    <button style={style.submitStyle} type="submit">{content.submit}</button>
                </form>
            );
        case 'h1':
        case 'h2':
        case 'div':
        case 'p':
        return <Element className="element" style={style} > {content} </Element>

        default:
            return <Element className="element" style={style} > {content} </Element>
    }
};


export default ComponentElementTester;