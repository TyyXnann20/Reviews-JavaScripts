// 4 (name, age, gender............)
// let/var/const name = [{}, {}, {}.................]

let employees = [
  {
    id: 1,
    name: "Noun SreyNann",
    gender: "Female",
    salary: 80000,
  },
  {
    id: 2,
    name: "Phorn Sophy",
    gender: "Female",
    salary: 70000,
  },
  {
    id: 3,
    name: "Phoung Phum",
    gender: "Male",
    salary: 75000,
  },
  {
    id: 4,
    name: "Keo Sreymich",
    gender: "Female",
    salary: 65000,
  },
  {
    id: 5,
    name: "Phork Phearom",
    gender: "Female",
    salary: 85000,
  },
];
// console.log(employees[0])
// console.log(employees[0].name)
// =============  object[1] ============
// id: 5
// name: Phork Phearom
// gender: Female
// salary: 85000
//  =============  object[1] ============

for (let i = 0; i < employees.length; i++) {
  console.log(`============= object[${i}]============`);
  console.log(`\tid: ${employees[i].id}`);
  console.log(`\tname: ${employees[i].name}`);
  console.log(`\tgender ${employees[i].gender}`);
  console.log(`\tsalary ${employees[i].salary}`);
}
