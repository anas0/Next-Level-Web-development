{
    //  utility types
    //  pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">;

    //  Omit
    type ContactInfo = Omit<Person, "name" | "age">;

    //  Required
    type PersonRequired = Required<Person>;

    //  Partial
    type PersonPartial = Partial<Person>;


}