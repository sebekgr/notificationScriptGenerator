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
        const fname = await scriptGenerator(data, user, url);
        try {
            await User.findOneAndUpdate({_id: user}, {host: url, script: fname});
            await res.send({status: 'success',
                    url: `<script src="${req.protocol}://${req.hostname}/script/${fname}"></script>`})
                    .status(200);
        } catch (err) {
            res.status(422).send(err);
        }
    });


    app.get('/script/:script', async (req, res) => {
        //set headers
        res.set({
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        })
        //find host who wants connect
        const host = new URL(req.headers.referer).href;
        const query = await User.findOne({host}, {script: 1});
        if(query === null) {
            res.status(401).send('nothing found');
        } else {
        //find his script
        const userScript = await readFile(`${__dirname}/../files/${query.script}.js`, 'utf8');
        //read and core file
        const coreScript = await readFile(`${__dirname}/../util/core.js`, 'utf8');
        //sending scripts
        //res.status(200).send(userScript, coreScript);
        console.log('sending script');
        res.status(200).send(userScript + coreScript);
        }
        

    });

}