// 7.1
/* const week = {
  ორშაბათი: 1,
  სამშაბათი: 2,
  ოთხშაბათი: 3,
  ხუთშაბათი: 4,
  პარასკევი: 5,
  შაბათი: 6,
  კვირა: 7,
};
console.log(week); */

// 7.2
/* const obj = { "9name": 10, key7: 20, "a-b": 30, "city 10": 40, city10: 50 };

console.log(obj["9name"]);
console.log(obj["key7"]);
console.log(obj["a-b"]);
console.log(obj["city10"]);
console.log(obj["city 10"]); */

// 7.3
/* const person = { name: "ვაჟა ცხადაძე", gender: "მამრობითი" };
const dob = { data_of_birth: 2011 };
const personInfo = { ...person, ...dob };

console.log(personInfo); */

// 7.4
/* const person = { name: "ვაჟა ცხადაძე", gender: "მამრობითი" };
const { name, gender } = person;

console.log(name, gender);
 */

// 7.5
/* 
const person = {
  name: "ვაჟა ცხადაძე",
  gender: "მამრობითი",
  data_of_birth: 2011,
};

function canVote(person) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - person.date_of_birth;
  return age >= 18;
}

console.log(canVote(person)); */
