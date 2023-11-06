{
    //  mapped types

    const arrayOfNumbers :number[] = [2, 17, 23];

    const arrayOfStrings : string[] = arrayOfNumbers.map( (number) => number.toString() );

    console.log(arrayOfStrings);


    type AreaNumber = {
        height: number;
        width: number;
    }

    type AreaString = {
        [key in keyof AreaNumber] : string;
    }









}