var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var printval = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome' + val);
    }
    if (typeof (val) == 'number') {
        console.log('your score is ' + val);
    }
};
printval('kumaran');
printval(100);
var printvalues = function (val) {
    if (Array.isArray(val)) {
        // console.log('Array is '+ val)
        console.log.apply(console, __spreadArrays(['Array is '], val));
        // console.log(val)
        // console.log(...val)
    }
    console.log(typeof (val));
    if (typeof (val) == 'object' && !Array.isArray(val)) {
        console.log(val);
    }
};
printvalues(['raj', 'ram']);
printvalues({ name: 'kumu' });
