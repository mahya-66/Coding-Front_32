// 1
const MAX_IN_STOCK_CARS = 10;
const cars = {
  bmw: { price: 50000, inStock: 4 },
  toyota: { price: 30000, inStock: 10 },
  tesla: { price: 70000, inStock: 2 },
  ford: { price: 25000, inStock: 8 }
}
const lessInStock = {
    name : "",
    count:MAX_IN_STOCK_CARS + 1
};
Object.entries(cars).forEach((car) => {
    if(car[1].inStock < lessInStock.count) {
        lessInStock.name = car[0];
        lessInStock.count = car[1].inStock;
    };
});
console.log(cars[lessInStock.name]);
const inStock = MAX_IN_STOCK_CARS - lessInStock.count;
const finalWorth = (cars[lessInStock.name].price * 0.8) * inStock;
console.log(finalWorth);

// 2 یک آرایه جدید بسازید که فقط توش اسم افراد باشه
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
const peopleName = people.map((person) => {
    return person.name;
});
console.log(peopleName);

// 3 یک آرایه جدید بسازید که توش اسم و سن و شغل آدما، به صورت جمله‌ای باشه
const sentences = people.map((person) => {
    return person.name + " is a " + person.age + " year old " + person.job;
});
console.log(sentences);

// 4 آرایه‌ای از افراد بالای ۳۰ سال بسازید
const over30 = people.filter((person) => {
    return person.age > 30;
});
console.log(over30);

// 5  لیستی از افرادی که Engineer هستند بسازید
const job = people.filter((person) => {
        return person.job === "Engineer";
  });
console.log(job);

// 6 بر اساس سن هر کدوم از آدما، سطح سینیور بودنشون رو مشخص کنین و به لیست آدما اضافه کنین.
// زیر ۳۰ سال: junior
// بین ۳۰ تا ۴۰: min
// بالای ۴۰ سال: senior
const peopleLevels = people.map((person) => {
    const levelOfSenior = {...person};
    if (person.age < 30) {
        levelOfSenior.level = "Junior";
    } else if (person.age <=40) {
        levelOfSenior.level = "Mid";
    } else {
        levelOfSenior.level = "Senior";
    }
    return levelOfSenior;
});
console.log(peopleLevels);
console.log(people);

// 7  میانگین سنی آدما تو هر شغلی رو بدست بیارین.
const jobData = {};
people.forEach(person => {
    const job = person.job;
    if (!jobData[job]) {
            jobData[job] = {
            sum:0,
            count:0
        };
    }
    jobData[job].sum = jobData[job].sum + person.age;
    jobData[job].count = jobData[job].count + 1;
    });
const averageJob = {};
Object.keys(jobData).forEach(job => {
    averageJob[job] = jobData[job].sum / jobData[job].count;
    });
console.log(averageJob);

// 8  پیدا کنین چه شغلی، سینیورهای بیشتری داره
const seniorJobs = {}; 
people.forEach(person => {
    const job = person.job;
    const isSenior = person.age > 30; 
    if (!seniorJobs[job]) {
        seniorJobs[job] = 0;
        }
        if (isSenior) {
            seniorJobs[job] = seniorJobs[job] + 1;
            }
            });
let mostSeniorsJob = null;
let maxSeniors = 0;
Object.keys(seniorJobs).forEach(job => {
  if (seniorJobs[job] > maxSeniors) {
    maxSeniors = seniorJobs[job];
    mostSeniorsJob = job;
  }
});
console.log(mostSeniorsJob);






