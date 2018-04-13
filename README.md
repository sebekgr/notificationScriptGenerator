# Popup generator Demo

## Features
- Adding elements such as Headings, Text, Images, Form with e-mail type
- Drag n Drop elements
- Creating another canvas
- Real-time testing your Popup
- Generating script and storage on our vps hosting
 (so no worries about coding and programming )
 Just attach link with ready script in head section
- Saving your current progress via localStorage API

### Live demo
[http://vps476880.ovh.net:4000/](http://vps476880.ovh.net:4000/)

### Form element
If you would like offer some products or receive e-mail of your customers you can provide endpoint in **Form** field. 
The data will be available as a object with this structure ` {mail: customer@example.com}`
For testing this up set up your endpoint with `http://vps476880.ovh.net:4000/test` and check response in console browser.

[![](https://iv.pl/images/80054974847721630161.png)](https://iv.pl/images/80054974847721630161.png)

### Another Canvas

If you added Form element, default behavior after clicking submit button is alert with 'Thank you' text. Instead this you can simply add Another Canvas for customize this message as like as you wish.

### Usage
- Login with google+ account
- Add some elements
- When you done click Generate script in elements section
- Copy and paste script into your **HEAD** section in your webpage
e.g. 
```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
		<script async src="http://vps476880.ovh.net:4000/script/7dbf80dfff9e"></script>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```
- Enjoy :)


### Small mention
As you can see the title contains **demo** .  So this project you should treat as a demo :D 
I can not give you a guarantee that it will be works correctly and constantly. I built this project just for develop my programming skills


#### License
The MIT License.
