const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);

const courses = [
    {
        item: "JS ",
        price: 299
    },
    {
        item: "PYTHON ",
        price: 399
    },
    {
        item: "Mobile Dev ",
        price: 1299
    },
    {
        item: "Data Science ",
        price: 2299
    }
]

const purchasedAll = courses.reduce((acc, curr) => acc + curr.price, 0)
console.log(purchasedAll);