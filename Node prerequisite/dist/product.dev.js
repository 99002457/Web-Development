"use strict";

var Product = function Product() {};

Product.prototype = {
  name: 'laptop',
  showDesc: function showDesc() {
    console.log('15 inch 12 gb ' + this.name);
  },
  printStock: function printStock(stock) {
    console.log('stock available ' + stock);
  }
};
pr = new Product();
pr.showDesc();
pr.printStock();