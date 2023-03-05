class Car {
    constructor(make, model) {
        this.alwi = make
        this.razaq = model
    }

    getinfo() {
        return `the car is a ${this.alwi} ${this.razaq}`
    }
}

console.log("alwi")
console.log("alwi")
const myCar = new Car("supra", "xhamster")
console.log(myCar.getinfo())