const fs = require('fs');

const html = fs.readFileSync('team.html', 'utf8');

// Regex to find image tags and their src/alt attributes
const imgRegex = /<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"[^>]*>/g;
const imgRegex2 = /<img[^>]+alt="([^">]*)"[^>]*src="([^">]+)"[^>]*>/g;

let matches = [];
let match;

while ((match = imgRegex.exec(html)) !== null) {
    matches.push({ src: match[1], alt: match[2] });
}
while ((match = imgRegex2.exec(html)) !== null) {
    matches.push({ src: match[2], alt: match[1] });
}

const teamNames = [
    "Jessica Sanchez",
    "Ashley Holloway",
    "Nicole Joiner",
    "Danielle Bacharach",
    "Michelle Jay",
    "Cat Reyes",
    "Cruz Fox",
    "Victoria McCool"
];

const teamImages = {};

matches.forEach(m => {
    const foundName = teamNames.find(name =>
        (m.alt && m.alt.includes(name)) ||
        (m.src && m.src.toLowerCase().includes(name.split(' ')[0].toLowerCase()))
    );

    if (foundName) {
        // Handle relative URLs if any
        let src = m.src;
        if (src.startsWith('/')) {
            src = 'https://lunaevolutioncounseling.com' + src;
        }
        teamImages[foundName] = src;
    }
});

console.log(JSON.stringify(teamImages, null, 2));
