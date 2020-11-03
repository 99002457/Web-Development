function addall() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function () {
        var summ = 0;
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var ele = args_1[_i];
            summ += ele;
        }
        return summ;
    };
}
function addalld(a, b) {
    return a + b;
}
console.log(addalld(10, 20));
console.log(addall(10, 20, 30, 40, 50));
function userDetails(name, city) {
    if (city === void 0) { city = 'bangalore'; }
    console.log("name " + name);
    console.log("city " + city);
}
// must provide one parameterr or else error
userDetails('raju');
userDetails('raju', 'otty');
//anonymous functions
var greet = function (msg) {
    return msg;
};
console.log(greet('have a nice day'));
console.log();
//using lambda
greet = function (msg) {
    return 'welcome' + msg;
};
console.log(greet('hello'));
console.log();
//single statement
var show = function () { return console.log('hi'); };
show();
console.log();
//check type
var checkType = function (a, b) {
    console.log(a + b);
};
checkType(10, 20);
checkType(10, 'Ram');
checkType('Ram', 'Tom');
