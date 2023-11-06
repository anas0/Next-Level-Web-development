{
    //  interface

    type User1 = {
        name: string;
        age: number;
    };
    
    interface User2{
        name: string;
        age: number;
    };
    
    const user1: User1 = {
        name: 'Bismi',
        age: 18
    }

    
    type UserWithRoll1 = User1 & {role : string}

    interface UserWithRoll2 extends User2{
        role: string;
    }

    const user2: UserWithRoll1 = {
        name: 'Bismi',
        age: 18,
        role: '213'
    }
    
    const user3: UserWithRoll2 = {
        name: 'Jone',
        age: 38,
        role: 'CEO'
    }



}