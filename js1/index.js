const people = [
  { name: "Alice", age: 25, job: "Engineer" },
  { name: "Bob", age: 32, job: "Designer" },
  { name: "Charlie", age: 29, job: "Teacher" },
  { name: "Diana", age: 24, job: "Developer" },
  { name: "Ethan", age: 35, job: "Manager" },
  { name: "Fiona", age: 28, job: "Engineer" },
  { name: "George", age: 41, job: "CEO" },
  { name: "Hannah", age: 30, job: "Marketing" },
  { name: "Ian", age: 27, job: "Support" },
  { name: "Jasmine", age: 33, job: "HR" }
];

// 1
console.log(
    people.map((person) => {
        return person.name;
    })
);

// 2 
console.log(
    people.map(person =>{
        return person.name +  " " + "is a" + " " + person.age + " " + "year old" + " " + person.job;
    })
)
// 3 
console.log(
    people.filter((person) => {
        return person.age > 30;
  })
);

// 4
console.log(
    people.filter((person) => {
        return person.job === "Engineer";
  })
)