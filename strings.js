// Extract the last four characters from the string
let a="extravaganza";
let result=a.substr(8,12);
console.log({result});

let food="The quick fox jumped over the lazy dog";
let food2=food.slice(0,4)+"eat"+food.slice(4);
console.log({food2});

// Count how many times the following string appears in the string variable
const story="The quick brown fox jumped over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

//  Find the following words from the following strings
const string1="The pupils are reading in the library";
const find= string1.search("are");
console.log({find});

const string2="The child was sitting on the table before it fell"
const get= string2.search("sitting");
console.log({get});

// Convert the following strings into the specified format
let g="wonderful";
let h=g.toUpperCase();
console.log({h});

let i="amaizing";
let j=i.toLowerCase();
console.log({j});

let x="UNDERneath";
let y=x.toLowerCase();
console.log({y});

let t="A wonderful world";
let v=t.toTitleCase();
console.log({v});