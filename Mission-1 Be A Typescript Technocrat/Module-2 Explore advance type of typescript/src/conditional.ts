{
    //  conditional type

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    // type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<'bike'>;

















}