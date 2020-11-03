    class Moter
    {
    constructor(brand,price)
    {
        this.brand=brand;
        this.price=price
    }
    set discount(dis)
    {
        this.brand=this.brand;
        this.price=this.price-dis;
    }
    get details()
    {
        return this.brand+" "+this.price;
    }
    set sbrand(brand)
    {
        this.brand=brand;
    }
    get sbrand()
    {
        return this.brand
    }
    }

    var motor=new Moter('bajaj',50000);
    motor.discount=6000;
    console.log(motor.details)
