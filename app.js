/*
    1.Dom Selection
    2.Event Listner
    3.Basic Velidation
    4.Creating Elements
    5.Appends
*/
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");


btn.addEventListener("click",function(e){
    e.preventDefault();
    console.log("Hello");
})
