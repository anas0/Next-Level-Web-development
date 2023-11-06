{
    // type assertion

    let anything: any;

    anything = 'Next Level Web Development';

    (anything as string).length;


    const kgToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if(typeof value === 'string'){
            return value * 1000;
        }
    }

    const result = kgToGm(1000) as number;




}