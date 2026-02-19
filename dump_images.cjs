const fs = require('fs');

const html = fs.readFileSync('team.html', 'utf8');
const imgRegex = /<img[^>]+>/g;

let match;
console.log('--- All Images ---');
while ((match = imgRegex.exec(html)) !== null) {
    console.log(match[0].substring(0, 500)); // Limit length just in case
}
