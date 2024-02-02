// Arrow fuction

function getSum(a, b) { 
  return a + b;
}
function getObject() {
  const person = {
    id: 1001,
    name: "Sophy",
    age: 1200,
  };
  return person;
}
// const name = () => retrun or () => {}
const arrowObj = () => ({ id: 1001, name: "Sophy", age: 1200 });
const arrowArrays = () => [10, 20, 20, 30];
const getSum1 = (a, b) => a * b;
console.log(getObject());
console.log(arrowObj());
console.log(arrowArrays());
