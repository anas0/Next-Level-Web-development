{
    // destructuring

    const user = {
        id: 231,
        name: {
            firstName: 'Jone',
            lastName: 'sina'
        },
        contactInfo: "016756000",
        address: 'Borisal'
    };

    const {id, name: {firstName: dakName}} = user

    // array destructuring

    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe'];

    const [a, b, c] = myFriends;
    const [, , bestFriend, ...rest] = myFriends;





}