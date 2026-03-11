'use strict';
//*& there are two ways of creating objects
var sen = {
  org: "Sential Design\u{2122}",
  loc: "New York, USA",
  empCount: 50,
  islisted: false
};
console.log(sen);
delete sen.loc;
sen.islisted = true;
sen.city = "Tokyo";
console.log(sen);
var propName = 'empCount';
console.log("Employee Count: ", sen[propName]);

let francos = {
  name: "Franco's Pizzeria",
  cuisine: ['Italian', 'Pizzeria'],
  rating: 4.5,
  address: '#35, 58th Street',
  // city: city,
  description: 'An authentic pizzeria based on original recipes',
};

let baarbaar = {
  name: 'Baar Baar',
  cuisine: ['Indian', 'Fine Dining'],
  rating: 4.7,
  address: '13E 1st St',
  city: city,
  description: 'A fantastic Indian restaurant',
};

console.log(francos.city.name = 'Manhattan');

// creating objects using object constructor
var note = new Object();
note['Tokyo'] = 'Yen';
note['yenNotes'] = 50;
note['USA'] = 'US Dollar';
console.log(
  `The currency of ${sen.city} is ${note[sen.city]} and the number of Yen notes is ${note.yenNotes}`
);

// nested objects
var s = {
  org: "Sential Design\u{2122}",
  loc: {
    city: "New York",
    country: "USA"
  },
  empCount: 50,
  islisted: false,
};
console.log(s.loc.city + " , " + s.loc.country);

// pass by value 
var fruit = "apple";
var pie = fruit;
pie = "chikoo";
console.log(fruit + pie);

var sd = {
  org: "Sential Design\u{2122}",
  loc: "USA",
  empCount: 50,
  islisted: false,
};
var lara = {
  name: 'Lara Clarak',
  age: 24,
  comp: sd.org,
  desi: "senior engg.",
  address: sd.loc,
};

var lehry = {
  name: 'Lehry Babu',
  age: 22,
  comp: sd.org,
  desi: "junior engg.",
  address: sd.loc,
};

lehry.address = "japan";

console.log(lara);
console.log(lehry);

//  this keyword
const p = {
  fname: 'Sarah Khan',
  age: 22,
};
const m = {
  fname: 'Joe Nilsen',
  age: 25
};
const intro = function () {
  return `Hi! I am ${this.fname}, I am ${this.age} years old.`;
}
let introo = p.intro.bind(m);
console.log(intro.call(m));

let u = {
  id: 101,
  name: 'Michael Dormick',
  isAdmin: 'false',
};
b = 'boolean'
console.log(typeof (b));
console.log(typeof u.isAdmin === 'boolean');

const USER = {
  name: 'John Mason',
  age: 35,
  profession: 'Character Animator',
};

USER.age = 38;

console.log(USER.age);

let city = {
  id: 1,
  name: 'New York',
};
// using this keyword
const person = {
  firstName: "Bawa",
  lastName: "Singh",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
const mem = {
  firstName: "Love",
  lastName: "Kataria"
}
let f = person.fullName.bind(mem) //an object can borrow a method from another object.
// here f is has become a semi-function which will give o/p by pairing with parenthesis
console.log("Fullname: ", f())

const user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);
user.surname = "Pete";
console.log(user);
//** for multi words dot'.' does not works only '[]' works */
user["fav color"] = "blue";
console.log(user);
delete user.name;
console.log(user);