{
    //  constraints

    interface Student {
        id: number;
        name: string;
        email: string;
    }

    const addCourseToStudent = <T extends Student> (student: T) => {
        const course = "Next Level Web Development";
        return{
            ...student,
            course
        };
    };

    const student1 = addCourseToStudent({
        id: 235,
        name: "Bismi",
        email: "b@gmail.com",
        devType: 'NLWD'
    });

    const student2 = addCourseToStudent({
        id: 211,
        name: "Jone",
        email: "j@gmail.com",
        hasWatch: 'Apple Watch'
    });










}