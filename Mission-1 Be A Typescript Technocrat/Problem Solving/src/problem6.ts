{
    // Problem 6: Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.

    // Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.


    const addFunction = (...rest: number[]) : number => {
        let sum = 0;

        rest.forEach((number) => {
            sum = sum + number;
        });

        return sum;
    }

    console.log(addFunction(1, 2, 3, 5, 7));
    









}