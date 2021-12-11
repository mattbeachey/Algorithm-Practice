const rebasePeriodInHours = 8;
const rebasesPerYear = 8760 / rebasePeriodInHours;
const percentToMultiple = percent => (percent + 100)/100;
const annualToDailyMultiple = apy => Math.pow(apy, 1/rebasesPerYear);

const multiplePerRebase = annualToDailyMultiple(percentToMultiple(80801.8));

console.log(multiplePerRebase)