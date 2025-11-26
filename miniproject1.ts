class students {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    
    constructor (nameProp: string, ageProp: number, genderProp: string, nationalityProp: string) {
        this.name = nameProp;
        this.age = ageProp;
        this.gender = "female";
        this.nationality = nationalityProp;
    }
    
    getNationality(): void {
        console.log(this.nationality); 
    }
}

interface ILundergrad {
    batch: number;
    name: string;
    age: number;
    gender: string;
    nationality: string;
    getNationality(): void;
    GPA?: number;
}

class underGraduates extends Students implements ILundergrad {
    batch: number;
    GPA?: number;

    constructor(
        batchProp: number,
        nameProp: string,
        ageProp: number,
        genderProp: string,
        nationalityProp: string
    ){
        super(nameProp, ageProp, genderProp, nationalityProp)

        this.batch = batchProp;
    }
}

// single student
var newStudent = new underGraduates (2024, "Jenny Anderson", 23, "female", "american");
// print
newStudent.getNationality();


// //multiple students array
// let newSt = [
//     new UnderGraduates (2024, "Jenny Anderson", 23, "female", "american"),
//     new UnderGraduates (2024, "Sofia Estudio", 29, "female", "chilian"),
//     new UnderGraduates (2024, "Jelena barkowitz", 26, "female", "polish")
// ]

// // print nationality
// newSt.forEach(student => {
//     student.getNationality();
// });

