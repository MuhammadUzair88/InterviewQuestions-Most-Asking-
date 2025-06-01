
// Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.

const start = new Date("2025-01-01");
const end = new Date("2025-01-31");

const diff = end - start; // difference in milliseconds

const seconds = diff / 1000;
const minutes = diff / (1000 * 60);
const hours   = diff / (1000 * 60 * 60);
const days    = diff / (1000 * 60 * 60 * 24);
const months  = diff / (1000 * 60 * 60 * 24 * 30); // Approximate month = 30 days
const years   = diff / (1000 * 60 * 60 * 24 * 365); // Approximate year = 365 days

console.log("Milliseconds:", diff);
console.log("Seconds:", seconds);
console.log("Minutes:", minutes);
console.log("Hours:", hours);
console.log("Days:", days);
console.log("Months (approx):", months);
console.log("Years (approx):", years);
