{
    // Union Types

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';

    const newDeveloper : FrontendDeveloper = 'fakibazDeveloper';

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
    };

    const user1: User = {
        name: 'joan',
        gender: 'male'
    }
}