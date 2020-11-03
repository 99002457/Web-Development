function add(num1,num2)
{
    dontExport();
    return parseInt(num1,2)+parseInt(num2,2);
}
function mul(num1,num2)
{
    dontExport();
    return parseInt(num1,10)+parseInt(num2,10);
}

exports.message='Hello world'

function dontExport()
{
    console.log('this is the calculator')
}

exports.add=add;
exports.mul=mul;
