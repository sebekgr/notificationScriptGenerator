const fs = require('fs');
const path = require('path');
const util = require('util');
const crypto = require('crypto');

async function createScript(data, user, url) {
    const text = url;
    const secret = user;
    const hash = crypto.createHmac('sha256', secret);
    hash.update(text);
    const fileName = hash.digest('hex').slice(0,12);

    const scriptContent = util.inspect(data, false, null);
    
    await fs.writeFile(`${__dirname}/../files/${fileName}.js`, 
        `(function(){const ed=${scriptContent}`
        , 'utf8', (err) => {
            if (err) console.log(err);
            console.log("files has been created");
    });

    return fileName;
    
}

module.exports = createScript;
