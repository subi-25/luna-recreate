const fs = require('fs');

const html = fs.readFileSync('team.html', 'utf8');

const names = [
    "Jessica Sanchez",
    "Ashley Holloway",
    "Nicole Joiner",
    "Danielle Bacharach",
    "Michelle Jay",
    "Cat Reyes",
    "Cruz Fox",
    "Victoria McCool"
];

const results = {};

names.forEach(name => {
    let index = html.indexOf(name);
    // If not found, try without middle initial or just last name if unique... 
    // But let's stick to exact first.

    if (index !== -1) {
        // Look backwards for src="
        // Scan backwards up to 2000 chars to be safe
        const sub = html.substring(Math.max(0, index - 2000), index);
        const srcIndex = sub.lastIndexOf('src="');

        if (srcIndex !== -1) {
            const urlStart = srcIndex + 5;
            const urlEnd = sub.indexOf('"', urlStart);
            let url = sub.substring(urlStart, urlEnd);

            // Check if it's a valid image URL
            if (url.includes('.jpg') || url.includes('.png') || url.includes('.jpeg') || url.includes('brandcrowd') || url.includes('images')) {
                results[name] = url;
            } else {
                results[name] = null; // Found src but maybe not image
            }
        } else {
            results[name] = null;
        }
    } else {
        results[name] = "Not Found in HTML";
    }
});

fs.writeFileSync('images.json', JSON.stringify(results, null, 2));
console.log('Images extracted to images.json');
