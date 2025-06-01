//Validate that a user's selected date range is no longer than 30 days

const start = new Date("2025-01-01");
const end = new Date("2025-01-31");

const diffInMs = end - start;
console.log(diffInMs)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

if (diffInDays <= 30) {
  console.log("Valid range");
} else {
  console.log("Too long");
}
