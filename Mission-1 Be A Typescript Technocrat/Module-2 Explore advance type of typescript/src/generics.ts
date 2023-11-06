{
    //  generics type

    type GenericsArray<param> = Array<param>;

    // const rollNumber : Array<number> = [2,6,5,4];
    const rollNumber : GenericsArray<number> = [2,6,5,4];

    const user: GenericsArray<{name: string, age: number}> = [
        {
            name: 'anas',
            age: 30
        },
        {
            name: 'Bismi',
            age: 18
        }
    ];






}