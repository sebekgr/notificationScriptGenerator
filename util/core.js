    let parents = [];

    //get style
    function retrieveStyle(element, style) {
        let inStyle = '';
        for (let [key, value] of Object.entries(style)) {
            inStyle += `${key}:${value};`
        }
        element !== null ? element.style.cssText = inStyle : null;
        return element !== null ? element : inStyle
    }
    
    //createelement
    function createElement(element, content, style) {
        let elem = document.createElement(element);
        if (element === 'img') {
            elem.src = content;
        } else {
            elem.innerText = content;
        }
        retrieveStyle(elem, style);
        return elem;
    }
    
    //createform
    function createForm(content, style) {
        let form = document.createElement('form');
        form = retrieveStyle(form, style.formStyle);
        form.style.display = 'inline-block';
        form.addEventListener('submit', e => {
            e.preventDefault();
            const email = e.target[0].value.trim();
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(email)) {
                alert("Entar a valid email");
                return false;
            }
            //testFetch(content.action);
            testFetch(content.action, email);
        }, false);
        form.innerHTML = `
            <input type="email" placeholder="${content.input}" style="${retrieveStyle(null, style.inputStyle)}" required/>
            <input type="submit" value="${content.submit}" style="${retrieveStyle(null, style.submitStyle)}"/>
            `;
        return form;
    }
    function testFetch(url, data) {
        let fDiv = document.getElementById(parents[0].id);
        let oo = document.querySelector('#oo');
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (parents.length === 2) {
                oo.insertBefore(parents[1], fDiv);
                oo.removeChild(fDiv);
                const inter2 = setTimeout(() => {
                    closeCanvas();
                }, parseInt(ed.canvasesReady[1].delay, 10));
            } else {
                alert('Thank you :)');
                closeCanvas();
            }
        })
            .catch((error) => {
                alert("Sorry but something went wrong! Please try again soon")
            })
    }
    
    //createchildren
    function createChildren(children) {
        let dc = document.createDocumentFragment();
        children.forEach(child => {
            const { content, style, elemType } = child;
            (elemType !== 'form' ?
                (child = createElement(elemType, (elemType !== 'div' ? content : ''), style)) :
                child = createForm(content, style));
            dc.appendChild(child);
        });
        return dc;
    }
    
    //creating cavnases
    function createCanvas(kanv) {
        kanv.forEach(canvas => {
            let canv = document.createElement('div');
            canv.id = canvas.id;
            retrieveStyle(canv, canvas.style);
            canv.appendChild(createChildren(canvas.children));
            parents.push(canv);
        });
    }
    
    //create overlay
    function createOverlay(statement, canvas) {
        let overlay = document.createElement('div');
        let close = document.createElement('button');
        close.style.cssText = 'background:#fff;border-radius:50%;border:2px solid black;position:absolute;top:-15px;right:-15px;width:20px;height:20px;';
        close.innerText = "✖";
        close.onclick = closeCanvas;
        overlay.id = "oo";
        let css = 'display:flex;overflow:auto;position:fixed;z-index:99;margin:auto;top:0;bottom:0;left:0;right:0;padding:30px 0;';
        overlay.style = css;
        statement ? overlay.style.background = 'rgba(0,0,0,.5)' : null;
        createCanvas(ed.canvasesReady);
        parents[0].appendChild(close);
        parents[0].style.position = 'relative';
        overlay.appendChild(parents[0]);
        return overlay;
    }
    
    //injecting css for animation
    function animationInject() {
        let fonts = document.createElement('link');
        fonts.href = 'https://fonts.googleapis.com/css?family=Josefin+Sans|Karma|Lato|Open+Sans+Condensed:300';
        fonts.rel = 'stylesheet';
        const head = document.querySelector('head');
        let style = document.querySelector('style');
        if (!style) {
            style = document.createElement('style');
            style.innerText = ed.animation;
            head.appendChild(style);
            head.appendChild(fonts);
        } else {
            style.innerText += ed.animation;
            head.appendChild(fonts);
        }
    }
    
    function init() {
        //css injecting
        animationInject();
        const inter1 = setTimeout(() => {
            document.body.appendChild(createOverlay(ed.overlay));
        }, parseInt(ed.canvasesReady[0].delay, 10));
    }
    
    //closing canvas;
    function closeCanvas() {
        document.body.removeChild(document.querySelector('#oo'));
    }
    init();
    
    
})();