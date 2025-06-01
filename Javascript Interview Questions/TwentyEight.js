// Add or subtract n days from a given date (e.g., Add 7 days to "2025-05-01")

const date = new Date("2025-05-01");

date.setDate(date.getDate()+7)
date.toISOString
console.log(date)