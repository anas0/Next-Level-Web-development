{
    //  ternary operator
    //  optional chaining
    //  nullish coalescing operator

    const age: number = 18;

    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({isAdult});


    //  nullish coalescing operator
    const isAuthenticated = null;

    const result1 = isAuthenticated ?? "guest";
    console.log({result1});








}