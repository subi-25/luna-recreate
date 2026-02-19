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
    const index = html.indexOf(name);
    if (index !== -1) {
        // Look backwards for src="
        const sub = html.substring(0, index);
        const srcIndex = sub.lastIndexOf('src="');

        if (srcIndex !== -1) {
            // Extract the URL
            const urlStart = srcIndex + 5;
            const urlEnd = sub.indexOf('"', urlStart);
            const url = sub.substring(urlStart, urlEnd);

            // Validate if it looks like an image
            if (url.startsWith('http') || url.startsWith('/')) {
                results[name] = url;
            } else {
                results[name] = "Likely Not Found (Validation Failed): " + url.substring(0, 50);
            }
        } else {
            results[name] = "No SRC found before name";
        }
    } else {
        results[name] = "Name Not Found";
    }
});

console.log(JSON.stringify(results, null, 2));
