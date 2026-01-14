var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(nameProp, ageProp, genderProp, nationalityProp) {
        this.name = nameProp;
        this.age = ageProp;
        this.gender = "female";
        this.nationality = nationalityProp;
    }
    Students.prototype.getNationality = function () {
        console.log(this.nationality);
    };
    return Students;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(batchProp, nameProp, ageProp, genderProp, nationalityProp) {
        var _this = _super.call(this, nameProp, ageProp, genderProp, nationalityProp) || this;
        _this.batch = batchProp;
        return _this;
    }
    return UnderGraduates;
}(Students));
// single student
var newStudent = new UnderGraduates(2024, "Jenny Anderson", 23, "female", "american");
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
