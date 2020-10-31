var Product=function(){}
Product.prototype={
 name:'laptop',
 showDesc:function()
 {
 console.log('15 inch 12 gb '+this.name);
 
 },
 printStock:function(stock)
 {
 console.log('stock available '+stock);
 }
}

pr=new Product();
pr.showDesc()
pr.printStock()