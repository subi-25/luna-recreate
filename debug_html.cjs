const fs = require('fs');

const html = fs.readFileSync('team.html', 'utf8');

const names = ["Jessica Sanchez", "Michelle Jay"];

names.forEach(name => {
    const index = html.indexOf(name);
    if (index !== -1) {
        console.log(`\n--- Context for ${name} ---`);
        const start = Math.max(0, index - 500);
        const end = Math.min(html.length, index + 500);
        console.log(html.substring(start, end));
    } else {
        console.log(`\n--- ${name} not found ---`);
    }
});
