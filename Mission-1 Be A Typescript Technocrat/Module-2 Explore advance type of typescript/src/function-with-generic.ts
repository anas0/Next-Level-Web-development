{
    //  function with generic

    const createArray = (param: string) : string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T> (param: T) : T[] => {
        return [param];
    }

    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric <string> ("Bangladesh");

    type User = {id: number; name: string};
    const resGenericObj = createArrayWithGeneric <User> ({id: 202, name: 'Bismi'});



    const createArrayWithTuple = <T, Q> (param1: T, param2: Q) : [T, Q] => {
        return [param1, param2];
    }

    const resTuple = createArrayWithTuple <string, number> ("Bangladesh", 2023);










}