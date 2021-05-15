const puzzle1 = (input) => [...new Set(input.split(", ").map(word => word.split('').reverse().join('')))].sort()[2];

module.exports = puzzle1;