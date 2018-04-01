const fs = require('fs');
const path = require('path');
const util = require('util');
const crypto = require('crypto');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const mkdir = promisify(fs.mkdir);

async function createScript(data, user, url) {
    const text = url;
    const secret = user;
    const hash = crypto.createHmac('sha256', secret);
    hash.update(text);
    const fileName = hash.digest('hex').slice(0,12);
    const scriptContent = util.inspect(data, false, null);

    try {

        //read directory
        const directory = await readdir(`${__dirname}/../`, 'utf8');
        if(!directory.includes('files')) {
            //make directory
            await mkdir(`${__dirname}/../files`);
        }
           //save file
        const file = await writeFile(`${__dirname}/../files/${fileName}.js`, 
        `(function(){const ed=${scriptContent};`
        , 'utf8');

        return {fileName, status: 'success'};

    } catch (error) {
        return {status: 'error'}
    }

    
    

}

module.exports = createScript;
