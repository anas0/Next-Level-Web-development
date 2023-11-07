{
    //  OOP - Inheritance 

    class Parent{
        constructor(public name: string, public age: number, public address: string){}

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours} hours`);
        }
    }

    class Student extends Parent{
        constructor(name: string, age: number, address: string){
            super(name, age, address);
        }
    }
    
    const student1 = new Student("Bismi", 18, "Dhaka");
    
    student1.getSleep(8);

    
    class Teacher extends Parent{
        constructor(name: string, age: number, address: string, public designation: string){
            super(name, age, address);
        }

        takeClass(numberOfClass: number){
            console.log(`${this.name} will take ${numberOfClass} class`);
        }
    }

    const teacher1 = new Teacher("Anas", 32, "Dhaka", "Lecturer");

    teacher1.takeClass(4);









    
}