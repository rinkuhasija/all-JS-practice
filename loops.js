//for Each

const coding = ["js", "ruby", "java", "python"]

// coding.forEach(item => console.log(item))

// filter 

const myNums = [1, 2, 3, , 4, 5, 6, , 7, 8, 9]
const newNum = myNums.filter((num) => {
    return num >= 4
})

console.log(newNum);
console.log("  ");

//same with forEach loop
let newCon = []
myNums.forEach(item => {
    if (item >= 4) {
        newCon.push(item)
    }
})
console.log(newCon);

//WORKING WITH OBJECTS
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks); 
console.log(" \n \n");

const publishDateFilter = books.filter( (bk) => bk.publish >= 2010)
console.log(publishDateFilter);
