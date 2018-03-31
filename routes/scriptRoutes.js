const loginRequired = require('../middlewares/loginRequired');
const scriptGenerator = require('../util/scriptGenerator');
const os = require('os');

module.exports = app => {
    app.post('/script/generate', loginRequired, async (req, res) => {
        const {canvasesReady, overlay, animation, url, user} = req.body;
        const data = {canvasesReady, overlay, animation};
       const fname = await scriptGenerator(data, user, url);
        console.log(fname);
        console.log(req.hostname);

        //let test =  await scriptGenerator;
        res.send({status: 'success', url: `http://${req.hostname}/script/${fname}`}).status(200);
    });


    app.get('/script/:id', loginRequired, async (req, res) => {

    });

}