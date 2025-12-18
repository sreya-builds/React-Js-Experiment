//2 type ke js hote hai normal js and module js 
//ek file ka saman dusare file mai bhej sakte hai 

import obj from './app.js'
console.log(obj);

import {add,subtract} from './app.js'

console.log(add(34,67));
console.log(subtract(756,234));

import skills from './test.js'
console.log(skills);

import {username,bestfriend} from './test.js'
console.log(username);
console.log(bestfriend);

import { maths,english } from './app.js';
console.log(maths,english);
