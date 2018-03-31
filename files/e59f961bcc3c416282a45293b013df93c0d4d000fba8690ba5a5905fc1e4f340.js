const exampleData2={ canvasesReady: 
   [ { id: 4563,
       name: 'Main canvas',
       delay: '3000ms',
       style: 
        { 'animation-duration': '1000ms',
          'background-color': '#f0f2f5',
          'animation-name': 'bounce',
          border: 'none',
          width: '600px',
          height: '723px',
          'padding-top': '2px',
          'padding-bottom': '2px',
          'padding-left': '2px',
          'padding-right': '2px',
          'border-radius': '5px',
          '-webkit-box-shadow': '-1px 1px 50px 10px rgba(0,0,0,0.5)',
          '-moz-box-shadow': '-1px 1px 50px 10px rgba(0,0,0,0.5)',
          'box-shadow': '-1px 1px 50px 10px rgba(0,0,0,0.5)' },
       children: 
        [ { id: 1522327919961,
            elemType: 'form',
            content: 
             { action: 'https://mydomain.com/api/newsletter/add/value',
               input: 'Provide your email and Subscribe Us !',
               submit: 'Subscribe' },
            style: 
             { formStyle: 
                { 'text-align': 'center',
                  'margin-top': '2px',
                  'margin-bottom': '2px',
                  'margin-left': '2px',
                  'margin-right': '2px',
                  'padding-top': '2px',
                  'padding-bottom': '2px',
                  'padding-left': '2px',
                  'padding-right': '2px',
                  width: '200px',
                  height: 'auto' },
               submitStyle: 
                { width: '50px',
                  height: '50px',
                  float: 'left',
                  'border-width': '2px',
                  'border-style': 'solid',
                  'border-color': '#000000',
                  'border-radius': '15px',
                  'margin-top': '2px',
                  'margin-bottom': '2px',
                  'margin-left': '2px',
                  'margin-right': '2px',
                  'padding-top': '2px',
                  'padding-bottom': '2px',
                  'padding-left': '2px',
                  'padding-right': '2px' },
               inputStyle: 
                { float: 'right',
                  width: '100px',
                  height: '20px',
                  'border-width': '2px',
                  'border-style': 'solid',
                  'border-color': '#000000',
                  'border-radius': '13px',
                  'margin-top': '2px',
                  'margin-bottom': '2px',
                  'margin-left': '2px',
                  'margin-right': '2px',
                  'padding-top': '2px',
                  'padding-bottom': '2px',
                  'padding-left': '2px',
                  'padding-right': '2px' } } } ] },
     { id: 1522329680513,
       name: 'Another Canvas',
       delay: '5000ms',
       style: 
        { 'animation-duration': '1000ms',
          'background-color': '#ffffff',
          'animation-name': 'zoomIn',
          border: 'none',
          width: '500px',
          height: '500px',
          'padding-top': '2px',
          'padding-bottom': '2px',
          'padding-left': '2px',
          'padding-right': '2px',
          'border-radius': '5px',
          '-webkit-box-shadow': '-1px 1px 50px 10px rgba(0,0,0,0.5)',
          '-moz-box-shadow': '-1px 1px 50px 10px rgba(0,0,0,0.5)',
          'box-shadow': '-1px 1px 50px 10px rgba(0,0,0,0.5)' },
       children: 
        [ { id: 1522329682706,
            elemType: 'img',
            content: 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif',
            style: 
             { width: '100px',
               height: '100px',
               float: 'none',
               'border-width': '2px',
               'border-style': 'solid',
               'border-color': '#000000',
               'border-radius': '15px',
               'margin-top': '2px',
               'margin-bottom': '2px',
               'margin-left': '2px',
               'margin-right': '2px',
               'padding-top': '2px',
               'padding-bottom': '2px',
               'padding-left': '2px',
               'padding-right': '2px' } } ] } ],
  overlay: false,
  animation: '@-webkit-keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@-webkit-keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}' }