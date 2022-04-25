var sellingPrice = 199;
var listingPrice = 799;

var discountPecentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Percentage is: " + discountPecentage);

discountPecentage = Math.round(discountPecentage);

console.log(discountPecentage);