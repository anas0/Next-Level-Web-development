{
    //  interface - generics

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
    }


    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'anas',
        computer: {
            brand: 'Asus',
            model: 'DFA56',
            releaseYear: 2020 
        },
        smartWatch: {
            brand: 'eco',
            model: '75BH',
            display: 'HD'
        }
    }


    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    const richDeveloper: Developer<AppleWatch> = {
        name: 'Bismi',
        computer: {
            brand: 'Apple',
            model: 'M2023',
            releaseYear: 2023 
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'JJ23',
            heartTrack: true,
            sleepTrack: true
        }
    }









}