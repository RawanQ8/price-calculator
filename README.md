# Price Calculator

A simple JavaScript utility for calculating a final price after applying a discount and tax.

This project is based on the roadmap challenge: https://roadmap.sh/projects/js-price-calculator

## What it does

The script includes four helper functions:

- `calculateDiscount(price, discountPercent)` returns the price after the discount is applied.
- `calculateTax(priceAfterDiscount, taxPercent)` returns the price with tax added.
- `calculateFinalPrice(price, discountPercent, taxPercent)` applies the discount first, then the tax.
- `createPriceSummary(price, discountPercent, taxPercent)` returns an object with the original price, discount, tax, and final price.

## Example

```js
const summary = createPriceSummary(100, 20, 10);
console.log(summary);
// { price: 100, discount: 20, tax: 10, finalPrice: 88 }
```

## File

- `price-calculator.js` - Contains the price calculation functions.

## Usage

Copy the functions from `price-calculator.js` into your JavaScript project or run them in a Node.js environment.
