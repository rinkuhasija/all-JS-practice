console.log("Start");

setTimeout(() => {
    console.log("CALLBACK FROM timeouT");
}, 2000);


console.log("End");

const startDate = new Date().getTime()
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime()
}

console.log("while expires now");