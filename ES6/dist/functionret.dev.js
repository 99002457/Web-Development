"use strict";

function showFinalCost(item) {
  return function calculaterice(cost) {
    if (item > 100) return (cost - cost * (10 / 100)) * item;else return cost * item;
  };
}

console.log(showFinalCost(50)(10));
console.log(showFinalCost(101)(10));