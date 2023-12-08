"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Jochen";
console.log(greetings);
// number & type inference
// let userId: number = 334455; // Right but not good practice > use inference
var userId = 334455; // typescript is smart enough to indentify this as of type number
// boolean & type inference
// let isLoggedIn: boolean = false; // Right but not good practice > use inference
var isLoggedIn = false; // typescript is smart enough to indentify this as of type boolean
