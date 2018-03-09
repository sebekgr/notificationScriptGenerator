import React from 'react';
const  ComponentElementTester = ({content, elemType: Element, style}) => {

    switch(Element) {
        case 'img':
            return <Element className="element" src={content} style={style} />
        case 'form':
        console.log(content);
            return (
                <form onSubmit={(e) => {e.preventDefault(); alert(e.target[0].value)}}style={style.formStyle} className="element">
                    <input style={style.inputStyle} type="text" placeholder={content.input} />
                    <button style={style.submitStyle} type="submit">{content.submit}</button>
                </form>
            );
        case 'h1':
        case 'h2':
        case 'span':
        case 'p':
        return <Element className="element" style={style} > {content} </Element>

        default:
            return <Element className="element" style={style} > {content} </Element>
    }
};


export default ComponentElementTester;