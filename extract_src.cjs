const fs = require('fs');

const html = fs.readFileSync('team.html', 'utf8');
const imgRegex = /<img[^>]+>/g;
const srcRegex = /src="([^"]+)"/;
const altRegex = /alt="([^"]*)"/;

let match;
console.log('--- Extracted Images ---');
while ((match = imgRegex.exec(html)) !== null) {
    const imgTag = match[0];
    const srcMatch = srcRegex.exec(imgTag);
    const altMatch = altRegex.exec(imgTag);

    if (srcMatch) {
        let alt = altMatch ? altMatch[1] : 'NO_ALT';
        let src = srcMatch[1];
        // Clean up potentially messy output
        console.log(`ALT: ${alt} | SRC: ${src.substring(0, 150)}...`);
    }
}
