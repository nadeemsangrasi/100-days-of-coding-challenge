//////////////////// Question 46 //////////////

interface Obj {
  make: string;
  model: string;
  year: number;
  describeLaptop: () => string;
}

let laptopObj: Obj = {
  make: "lenovo",
  model: "think pad",
  year: 2022,
  describeLaptop(): string {
    return `make:${this.make}\nmodel:${this.model}\nyear:${this.year}`;
  },
};
console.log(laptopObj.describeLaptop());

/////////////////// Question 17 ////////////////

let arrayObj: Obj[] = [  {
    make: "lenovo",
    model: "think pad",
    year: 2022,
    describeLaptop(): string {
      return `make:${this.make}\nmodel:${this.model}\nyear:${this.year}`;
    },
},
  {
    make:"dell",
    model:"numpad",
    year:2018,
    describeLaptop():string{
return `make:${this.make}\nmodel:${this.model}\nyear:${this.year}`
    }
},
{
    make:"mac",
    model:"air 3",
    year:2017,
    describeLaptop():string{
return `make:${this.make}\nmodel:${this.model}\nyear:${this.year}`
    }
},
];

let [obj1,obj2,obj3]=arrayObj;
console.log(obj1);
console.log(obj2);
console.log(obj3);



/////////////////// Question 18 ////////////////

let laptop1Prices :number[] = [12000,25000,15000]
let laptop2Prices :number[] = [18000,22000,23000]
let combinedPrices : number[] = [...laptop1Prices,...laptop2Prices.sort((a,b)=>a-b)]
console.log(combinedPrices)