// immutable ==> means a peice of data that we do not ever want to change

// var a = {name: "will"};
// a.name = "Frid";  // a has changed
// console.log(a)

// ........................................................................ //
/**
 * there is two types of data
 * - primitive => when a variable assigned to primitive, it creates new variable 
 * with new entry of the value in the memory.
 * 
 * - reference => a= {}; a = b => then both of them refer to the exact same object in the memory
 */

/** create new object */
// var a = {name: "will", age: 35};
// var b = Object.assign({}, a, {name: "Fred"});
// console.log(b, a);

/** create new array */
// var c = [1,2,3];
// var d = c.concat();
// console.log(c,d);

// var e = c.filter(val => val !== 2);
// console.log(c, e);

/** object has data and array */
var f = {name: "will", things: [0,1,2]};
var g = Object.assign({}, f, {name: "Fred"});
g.things = f.things.concat(3);
console.log(f, g)