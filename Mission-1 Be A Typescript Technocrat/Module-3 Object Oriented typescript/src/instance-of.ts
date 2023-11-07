{
    //  Type guard using instance of

    class Animal{
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species =species;
        }

        makeSound(){
            console.log("I am making sound");
        }
    }

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species);
        }

        makeBark(){
            console.log("I am barking");
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species);
        }

        makeMeaw(){
            console.log("I am Meaw Meaw");
        }
    }

    const dog = new Dog("Dog vai", "dog");
    const cat = new Cat("Cat vai", "cat");
    

    const getAnimal = (animal: Animal) => {
        if(animal instanceof Dog){
            animal.makeBark();
        }
    }












}