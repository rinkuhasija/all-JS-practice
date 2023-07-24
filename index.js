const promiseOne = new Promise(resolve => console.log("resolved"));
const date = new Date()

console.log(promiseOne);
console.log(date);

const obj = {
    youVar: "RINKU",
    func: function User() {
        console.log(this);
        console.log(`hello ${this.youVar}`);
    }

}

console.log(obj.func());
