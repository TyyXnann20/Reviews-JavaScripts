//   Oject = A collection of realted properties or methods
//             can represent real object (name, gender, age...)
//     1. to create object: var/let/const = {key: value, ......}
let empInfo = {
    code: 1001,
    name: "Sophy",
    age: 20,
    rate:1.4,
    hour: 40,
    salary: 0,
    isSingle: true,
    getName:function(){
        console.log("My name's ", this.name);
    }
}
// name.key
console.log(empInfo.name)
console.log(empInfo.salary)
empInfo.getName()