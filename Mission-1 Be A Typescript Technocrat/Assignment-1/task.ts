const stringOrNUmber= (param: string | number): number => {
    if(typeof(param) === 'string'){
        return param.length;
    } else{
        return param * param;
    }
}

console.log(stringOrNUmber('Banana'));
console.log(stringOrNUmber(12));






interface Person{
    address?: {
        city: string;
        street: string;
    };
    phone: number;
}

const person1: Person = {
    address: {
        city: 'Dhaka',
        street: 'Mirpur Road'
    },
    phone: 1819680004
}

function getAddressCity(person: Person){
    return person?.address?.city;
}

console.log(getAddressCity(person1));






class Cat{
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

const cat1 = new Cat('Tom');

const isCat = (cat : Cat) =>{
    if(cat instanceof Cat){
        console.log("yes, it's a cat.");
    }else{
        console.log("no, it's not a cat.");
    }
}

isCat(cat1);






const mixedData = [1, 'two', 3, 'four', 5];

function add(data: Array<number | string>) : number{
    let total = 0;

    data.forEach((value) => {
        if(typeof(value) === 'number'){
            total = total + value;
        }
    });

    return total;
}

console.log(add(mixedData));






interface Car{
    make: string;
    model: string;
    year: number;
}

interface Driver{
    name: string;
    licenseNumber: number;
}

const toyotaCar : Car = {
    make: 'Toyota',
    model: 'Fortuner',
    year: 2021
}

const trackDriver: Driver = {
    name: 'Mr. Driver',
    licenseNumber: 3654231
}

function combinedInterface (car: Car, driver: Driver): Object{
    const combinedProperties = {...car, ...driver};
    return combinedProperties;
}

console.log(combinedInterface(toyotaCar, trackDriver));






function sumOfNumbers (param: unknown){
    if(Array.isArray(param)){
        if(param.every((data) => typeof(data) === 'number')){
            let result = 0;

            param.forEach((value) => {
                if(typeof(value) === 'number'){
                    result = result + value;
                }
            });
            console.log(result);
        }else{
            console.log("the parameter is not an array of numbers");
        }

    }else{
        console.log("the parameter is not an array");
    }
}

sumOfNumbers([1, 2, 3, 4, 5]);






const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";

const findFirstOccurrence = <T> (arr: T[], value: any): number =>{
    const index = arr.indexOf(value);
    if(index){
        return index;
    }else{
        return -1;
    }
}

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);

console.log(indexInNumbers);

console.log(indexInStrings);






interface Product{
    name: string;
    price: number;
    quantity: number;
}

const shoppingCart: Array<Product> = [
    {
        name: 'T-shirt',
        price: 1500,
        quantity: 3
    },
    {
        name: 'Pant',
        price: 2000,
        quantity: 2
    },
    {
        name: 'Blazer',
        price: 5000,
        quantity: 1
    }
];

const totalShoppingCart= (arr: Array<Product>): number => {
    let total = 0;

    const priceArray = arr.map((obj) => obj.price * obj.quantity);
    
    priceArray.forEach((num) => {
        total = total + num;
    });

    return total;
}

console.log(totalShoppingCart(shoppingCart));