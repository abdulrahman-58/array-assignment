// // 1. BASIC ARRAY OPERATIONS
// // creating an array that contains four fruits
// let fruits = ["Apple", "Orange", "Banana", "Mango"];
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function calculateAverageGrades(students) {
    return students.map(function (student) {
        var averageGrade = student.grade.reduce(function (acc, current) { return acc + current; }, 0) / student.grade.length;
        return __assign(__assign({}, student), { averageGrade: averageGrade });
    });
}
;
var students = [{
        name: "Ali", id: 10, grade: [80, 90, 70]
    },
    { name: "Arif", id: 20, grade: [90, 80, 95] },
    { name: "Zohaib", id: 30, grade: [70, 80, 90] }
];
var studentsWithAverageGrades = calculateAverageGrades(students);
console.log(studentsWithAverageGrades);
