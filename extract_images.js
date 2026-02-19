const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('team.html', 'utf8');

// Regex to find image tags and their src/alt attributes
// This is a simple regex, might need refinement depending on HTML structure
const imgRegex = /<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"[^>]*>/g;
const imgRegex2 = /<img[^>]+alt="([^">]*)"[^>]*src="([^">]+)"[^>]*>/g;

let matches = [];
let match;

// Try both attribute orders
while ((match = imgRegex.exec(html)) !== null) {
    matches.push({ src: match[1], alt: match[2] });
}
while ((match = imgRegex2.exec(html)) !== null) {
    matches.push({ src: match[2], alt: match[1] });
}

// Filter for team members known
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
    // Check if alt text contains a team name
    const foundName = teamNames.find(name => m.alt.includes(name) || m.src.includes(name.split(' ')[0].toLowerCase()));
    if (foundName) {
        teamImages[foundName] = m.src;
    }
});

console.log(JSON.stringify(teamImages, null, 2));
