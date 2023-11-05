{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactInfo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Bismi',
        age: 18,
        gender: 'male',
        contactInfo: '01719688880',
        address: 'moon'
    }

    const student2: Student = {
        name: 'Abul',
        age: 50,
        gender: 'male',
        address: 'venus'
    }


    type UserName = string;

    const userName: UserName = "bismi";

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;


}