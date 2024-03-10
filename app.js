let screenPrice = 10000;
let percentage = 10;

let titleProject = prompt('Project name');
console.log(titleProject);

let screenValue = prompt('Template, design, animation');
console.log(screenValue);

let responsive = prompt('Do you need a responsive website?');
console.log(responsive);

let service = prompt('Any services?');
console.log(service);

let servicePrice = +prompt('How much is it?');
console.log(servicePrice);

let serviceSecond = prompt('Any option?');
console.log(serviceSecond);

let servicePriceSecond = +prompt('How much is it?');
console.log(servicePriceSecond);

let fullPrice = screenPrice + servicePrice + servicePriceSecond;
console.log(fullPrice);

let percentageResult = +(fullPrice * (percentage / 100));
console.log(percentageResult, 'Percent to diller:');

// Variables
let servicePercentPrice = fullPrice - percentageResult;
console.log(Math.ceil(servicePercentPrice), 'Full price and % for diller');

if (fullPrice > 50000) {
  console.log('Discount 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
  console.log('Discount 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
  console.log('Without discount');
} else if (fullPrice < 0) {
  console.log('Something Wrong!');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
  console.log('Check all');
}
