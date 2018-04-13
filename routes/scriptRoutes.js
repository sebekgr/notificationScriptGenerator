const loginRequired = require('../middlewares/loginRequired');
const scriptGenerator = require('../util/scriptGenerator');
const User = require('../models/userModels');
const { URL } = require('url');
const {promisify} = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

module.exports = app => {
    app.post('/script/generate', loginRequired, async (req, res) => {
        const {canvasesReady, overlay, animation, url, user} = req.body;
        const data = {canvasesReady, overlay, animation};
        console.log(req.headers)
        
        try {
            const fname = await scriptGenerator(data, user, url);
            await User.findOneAndUpdate({_id: user}, {host: url, script: fname.fileName});
            await res.send({status: fname.status,
                    url: `<script async src="${req.protocol}://${req.headers.origin}script/${fname.fileName}"></script>`})
                    .status(200);
        } catch (err) {
            res.status(422).send({status: 'error'});
        }
    });


    app.get('/script/:script', async (req, res) => {
        //set headers
        res.set({
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        })
        const host = new URL(req.headers.referer).href;
        const query = await User.findOne({host}, {script: 1});
        try {
            if(query === null) {
                res.status(401).send('nothing found');
                return;
            } else {
                //find his script
                const userScript = await readFile(`${__dirname}/../files/${query.script}.js`, 'utf8');
                //read core file
                const coreScript = await readFile(`${__dirname}/../util/core.js`, 'utf8');
                //sending scripts
                res.status(200).send(userScript + coreScript);
            }
        } catch(error) {
            res.status(404).send(error);
        }
     });

     //testing post request from form editor;
     app.post('/test', (req, res) => {
            console.log(req.body);
            res.send(req.body).status(200);
     })
}