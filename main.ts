// // 1. BASIC ARRAY OPERATIONS
// // creating an array that contains four fruits
// let fruits = ["Apple", "Orange", "Banana", "Mango"];

// // perfoming Functions 
// // . AAding new fruit to the end of the array
// fruits.push("Strawberry");
// console.log(fruits);

// // . Removing the first fruit from the array
// fruits.shift();
// console.log(fruits);

// // . Add a new fruit to the biginning of the array
// fruits.unshift("Grapes");
// console.log(fruits);

// // . finding the index of a fruit
// const index = fruits.indexOf("Grapes");
// console.log(index);
// // removing that fruit using index
// fruits.splice(index , 1);
// console.log(fruits);


// // 2. WORKING WITH MULTIDIMENSIONAL ARRAYS
// // 3*3 matrix of numbers as a multidimensional array
// const matrix: number[][] =[
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// // Printing the diagonal elements of the matrix
//     function printDiagonal(matrix:number[][]){
//         for(let i = 0; i < matrix.length; i++) {
//             console.log (matrix[i][i]);
//         };
//     };
//   console.log("Diagonal Elements:");
//   printDiagonal(matrix);

//   // Calculating the sum of all elements in the matrix
//   function sumMatrix (matrix){
//     let totalSum = 0;
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             totalSum += matrix[i][j];
//         }
//     }
//     return totalSum;
//   }
//   console.log("Sum of all elements in the matix:", sumMatrix(matrix));


// 3. FILTERING AND SEARCHING IN ARRAYS OF OBJECTS
// // An Array of objects
// type Book ={
//     title: string;
//     author: string;
//     yearPublished: number;
// };
// let books: Book[] =[{
//     title: "Book1", author: "author1", yearPublished: 1996},
//     {title: "Book2", author: "author2", yearPublished: 1999},
//     {title: "Book3", author: "author3", yearPublished: 2006},
//     {title: "Book4", author: "author4", yearPublished: 2009},
//     {title: "Book5", author: "author5", yearPublished: 2016}
// ];

// // . Filter books published after the year 2000
//    function booksPublishedAfter2000(books :Book[]):Book[]{
//     return books.filter (book => book.yearPublished > 2000);
//    }
//    const booksAfter2000 = booksPublishedAfter2000(books);
//    console.log(booksAfter2000)
// // . Search for books by a specific author
// function bookByAuthorName (books: Book[] , author: string): Book[]{
//     return books.filter(book => book.author === author);
// };
// const bookByAuthor3 = bookByAuthorName(books, "author3");
// console.log(bookByAuthor3);

// 4. USING ARRAY METHODS
// let arr: number[] = [10,20,30,40,50,60,70];
// // Creating a new array with square of each number
// const squares= arr.map(ar => ar ** 2);
// console.log(squares);                  //[100,  400,  900,1600, 2500, 3600,4900];

// // Filter out all numers greater than 50
// const filterNumbers = arr.filter(ar => ar <= 50);
// console.log(filterNumbers);           // [ 10, 20, 30, 40, 50 ]

// // Use the reduce method to find the sum of all numbers in the array
// const sum = arr.reduce((acc, current) => acc + current , 0);
// console.log(sum);             // 280
  
// 5. ADVANCED WORKING WITH NESTED ARRAYS AND OBJECTS
//   Function that calculates the average grade for each student and adds as a new property to array of objects.
// type Student ={
//     name: string;
//     id: number;
//     grade: number[];
//     averageGrade?: number;
// };
// function calculateAverageGrades(students:Student[]){
//      return students.map(student =>{
//         const averageGrade = student.grade.reduce((acc , current) => acc + current ,0) /student.grade.length;
//         return{ ...student, averageGrade};
//      });
// };
// const students: Student[] =[{
//     name: "Ali", id: 10, grade:[80,90,70]},
//     {name: "Arif", id: 20, grade:[90,80,95]},
//     {name: "Zohaib", id: 30, grade:[70,80,90]}
// ];
// const studentsWithAverageGrades = calculateAverageGrades(students);
// console.log(studentsWithAverageGrades);           // [
//   { name: 'Ali', id: 10, grade: [ 80, 90, 70 ], averageGrade: 80 },
//    {name: 'Arif',id: 20,grade: [ 90, 80, 95 ],averageGrade: 88.33333333333333},
//   { name: 'Zohaib', id: 30, grade: [ 70, 80, 90 ], averageGrade: 80 }]