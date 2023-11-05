// Learning Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number{
    return num1 + num2;
}

add(2, 3);

const addArrow = (num1:number, num2:number): number => num1+num2;

// object --> function --> method

const poorUser = {
    name: 'bismi',
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance : ${this.balance + balance}`;
    }
}


const arr : number[] = [1, 4, 13];

const newArray = arr.map(elem=> elem * elem);