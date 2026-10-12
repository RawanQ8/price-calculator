function calculateDiscount(price, discountPercent) {
    return price * ( 100 - discountPercent) / 100
}

function calculateTax(priceAfterDiscount, taxPercent) {
    return priceAfterDiscount * ( 100 + taxPercent ) / 100
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    const priceAfterDiscount = calculateDiscount(price, discountPercent)
    return calculateTax(priceAfterDiscount, taxPercent)
}

function createPriceSummary(price, discountPercent, taxPercent) {
    const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent)
    return {
        price: price,
        discount: calculateDiscount(price, discountPercent),
        tax: calculateTax(price, taxPercent),
        finalPrice: finalPrice
    }
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));