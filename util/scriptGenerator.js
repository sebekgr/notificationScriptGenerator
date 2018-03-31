const fs = require('fs');
const path = require('path');
const util = require('util');
const crypto = require('crypto');

async function createScript(data, user, url) {
    const text = url;
    const secret = user;
    const hash = crypto.createHmac('sha256', secret);
    hash.update(text);
    const fileName = hash.digest('hex');

    const scriptContent = util.inspect(data, false, null);
    
    await fs.writeFile(`${__dirname}/../files/${fileName}.js`, 
        `const exampleData2=${scriptContent}`
        , 'utf8', (err) => {
            if (err) console.log(err);
            console.log("files has been created");
    });

    return fileName.slice(0, 12);

    
}

module.exports = createScript;
