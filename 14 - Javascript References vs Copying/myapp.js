 // start with strings, numbers and booleans

 console.log("The new string is just a reference to the first but the first is left unchanged:");
 let string1 = "Hello";
 let string2 = string1;

 string2 = "Goodbye";

 console.log(`string1 = ${string1}\n`, `string2 = ${string2}`);
 console.log("---------------------------------------------------------------------");


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const players2 = players;

// however what happens when we update that array?
console.log("This is also a reference, but here the original array IS changed:");
players2[3] = "Bon Jovi";
console.log(`players = `, players,  `\nplayers2 = `, players2);
players[3] = "Poppy";

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
console.log("---------------------------------------------------------------------");
console.log("Here we have used .slice and so this is a copy. The original array is unchanged:")
const players3 = players.slice();
players3[3] = "Scooter";
console.log(`players = `, players,  `\nplayers3 = `, players3);
console.log("---------------------------------------------------------------------");

// or create a new array and concat the old one in
console.log("This is also a copy made with .concat. Here, original array is also unchanged:")
const players4 = [].concat(players);
players4[3] = "Dame Judy Dench";
console.log(`players = `, players,  `\nplayers4 = `, players4);
console.log("---------------------------------------------------------------------");

// or use the new ES6 Spread
console.log("This is a copy made with ES6 Spread. The original array is unchanged again:")
const players5 = [...players];
players5[3] = "Dion Dublin";
console.log(`players = `, players,  `\nplayers5 = `, players5);
console.log("---------------------------------------------------------------------");

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 400;
console.log("'person' has taken the number 400 which was assigned to it's reference 'captain'")
console.log(`person = `, person);
console.log("---------------------------------------------------------------------");


// how do we take a copy instead?
console.log("Here we have created a copy of 'person' using Object.assign and can see that the 'number' property of the original object is unchaged")
const captain2 = Object.assign({}, person, {number: 999, age: 21});
console.log(`person = `, person, '\ncaptain2 = ', captain2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
console.log("---------------------------------------------------------------------");

console.log("Here I have created a copy of 'sol' and the 'age' value of the original is unchanged, however the value of 'facebook' in the 'social' HAS been changed:")
const sol = {
  name: "Sol",
  age: 30,
  social: {
    facebook: "simonfromblue"
  }
};

const clonePerson = Object.assign({}, sol);
clonePerson.age = 99;
clonePerson.social.facebook = "duncanfromblue";
console.log(`sol = `, sol, '\nclonePerson = ', clonePerson);

console.log("---------------------------------------------------------------------");

// const deepCopy = _.cloneDeep(sol);

const deepCopy = JSON.parse(JSON.stringify(sol));
deepCopy.social.facebook = "simonfromblue";
console.log(`sol = `, sol, '\ndeepCopy = ', deepCopy);
