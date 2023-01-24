const process = require("process");

// console.log(process.argv);

let itemCostInput = null;
let paymentInput = null;

for (let i = 0; i < process.argv.length; ++i) {
  const arg = process.argv[i];
  if (arg === "--item-cost") {
    itemCostInput = process.argv[i + 1];
    ++i;
  } else if (arg === "--payment") {
    paymentInput = process.argv[i + 1];
    ++i;
  }
}

if (itemCostInput == null) {
  console.error("--item-cost must be provided");
  process.exit(1);
}

const itemCost = Number(itemCostInput) * 100;
if (isNaN(itemCost)) {
  console.log("--item-cost must be a number");
  process.exit(1);
}

if (paymentInput == null) {
  console.error("--payment must be provided");
  process.exit(1);
}

const payment = Number(paymentInput) * 100;
if (isNaN(payment)) {
  console.log("--payment must be a number");
  process.exit(1);
}

function vending(itemCost, payment) {
  let subTotal = payment - itemCost;

  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  console.log(`total change: ${subTotal / 100}`);

  while (subTotal >= 25) {
    subTotal -= 25;
    ++quarters;
  }

  while (subTotal >= 10) {
    subTotal -= 10;
    ++dimes;
  }

  while (subTotal >= 5) {
    subTotal -= 5;
    ++nickels;
  }
  while (subTotal >= 1) {
    subTotal -= 1;
    ++pennies;
  }

  console.log(`
    total change: ${subTotal}
    quarters: ${quarters}
    dimes: ${dimes}
    nickels: ${nickels}
    pennies: ${pennies}
  `);
  return subTotal;
}

vending(itemCost, payment);
