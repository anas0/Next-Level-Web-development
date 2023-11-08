{
    // Problem 1: Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

    // After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects.


    type User = {
        id: number
        name: string;
    }
    
    const user : Array<User> = [
        {
            id: 10,
            name: 'Bismi'
        },
        {
            id: 11,
            name: 'Akib'
        },
        {
            id: 12,
            name: 'Bappy'
        }
    ];

    function getPropertyFromArray <T, K extends keyof T> (array: T[], key: K) : Array<T[K]> {
        return array.map((obj) => obj[key]);    
    }

    console.log('Extracted names : ', getPropertyFromArray(user, 'name'));
    













    
}