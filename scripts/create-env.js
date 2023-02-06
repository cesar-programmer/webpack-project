const fs = require('fs');

fs.readFileSync('./.env', `API=${process.env.API}\n`);
