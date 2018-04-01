const fs = require('fs');
const path = require('path');
const util = require('util');
const crypto = require('crypto');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

async function createScript(data, user, url) {
    const text = url;
    const secret = user;
    const hash = crypto.createHmac('sha256', secret);
    hash.update(text);
    const fileName = hash.digest('hex').slice(0,12);
    const scriptContent = util.inspect(data, false, null);

    try {
        //make directory
        const directory = await mkdir(`${__dirname}/../files`);
        //save file
        const file = await writeFile(`${__dirname}/../files/${fileName}.js`, 
        `(function(){const ed=${scriptContent};`
        , 'utf8');

        return {fileName, status: 'success'};

    } catch (error) {
        if(error.code === 'EEXIST') {
            console.log('directory already exists');
            return {fileName, status: 'success'};
        } else {
            return {status: 'error'}
        }
        console.error(error);
    }

    
    

}

module.exports = createScript;
