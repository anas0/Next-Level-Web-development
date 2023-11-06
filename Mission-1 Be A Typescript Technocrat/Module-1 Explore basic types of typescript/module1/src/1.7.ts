{
    // spread operator
    // rest operator
    // destructuring



    // spread operator
    const bros1: string[] = ['shaon', 'nadim', 'naim'];
    const bros2: string[] = ['azad', 'pabel', 'neil'];

    bros1.push(...bros2);


    const mentor1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentor2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentor1,
        ...mentor2
    }
    

    // rest operator

    const greetFrinds = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`hi ${friend}`));
    }

    greetFrinds('abul', 'babul', 'kabul');





}