{
    //  generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";  // manually

    type Owner2 = keyof Vehicle;

    const person1: Owner2 = "bike";

    const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Bismi',
        age: 18,
        address: "Dhaka"
    }

    const result1 = getPropertyValue(user, 'name');









}