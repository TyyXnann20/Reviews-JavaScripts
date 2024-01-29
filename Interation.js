// 1. while loop, for loop, do while
// 2. for in , for of
let i = 1;
//

// for(i = 0; i<=10; i+=2){
//     console.log(`${i} is even number`)
// }

let empInfo = {
  code: 1001,
  name: "Sophy",
  age: 20,
  rate: 1.4,
  hour: 40,
  salary: 0,
  isSingle: true,
  getName: function () {
    console.log("My name's ", this.name);
  },
};
// for of
var empInfo1 = [1001, "Sophy", "Female", 24, false];
let key;
// for (key of empInfo1){
//     console.log(key);
// }
// for in

for (let index in empInfo1) {
  console.log(empInfo1[index]);
}
for (key in empInfo) {
  console.log(key);
}
