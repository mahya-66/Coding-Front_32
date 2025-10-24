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
// ۱. بر اساس سن هر کدوم از آدما، سطح سینیور بودنشون رو مشخص کنین و به لیست آدما اضافه کنین.
// زیر ۳۰ سال: junior
// بین ۳۰ تا ۴۰: min
// بالای ۴۰ سال: senior
// مثال
// [
//     { name: "Bob", age: 32, job: "Designer", level: "Mid" }
// ]

// ۲. میانگین سنی آدما تو هر شغلی رو بدست بیارین.
// ۳. پیدا کنین چه شغلی، سینیورهای بیشتری دار

// 1
const peopleWithLevels = people.map(person => {
const levelOfPeople = { ...person };
if (levelOfPeople.age < 30) levelOfPeople.level = "Junior";
else if (levelOfPeople.age <= 40) levelOfPeople.level = "Mid";
else levelOfPeople.level = "Senior";
return levelOfPeople;
});
console.log(peopleWithLevels);

// 2 
const jobs = [];
const averages = [];
peopleWithLevels.forEach(person => {
  if (!jobs.includes(person.job)) {
    jobs.push(person.job);
    const peopleWithSameJob = peopleWithLevels.filter(eve => eve.job === person.job);
    let sum = 0;
    peopleWithSameJob.forEach(occupation => sum += occupation.age);
    const avg = sum / peopleWithSameJob.length;
    averages.push( {
      averageAge: avg 
    });
  }
});
console.log(averages);

// 3 
const jobsWithSeniors = [];
const seniorCounts = [];
peopleWithLevels.forEach(person => {
  if (person.level === "Senior") {
    if (!jobsWithSeniors.includes(person.job)) {
      jobsWithSeniors.push(person.job);
      const sameJobSeniors = peopleWithLevels.filter(eve => eve.job === person.job && eve.level === "Senior");
      seniorCounts.push({
        count: sameJobSeniors.length
      });
    }
  }
});
let maxCount = 0;
let mostSeniorJob = "";
seniorCounts.forEach(item => {
  if (item.count > maxCount) {
    maxCount = item.count;
    mostSeniorJob = item.job;
  }
});
console.log(seniorCounts);