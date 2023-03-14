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

    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please Valid Input');
    }else{
        const newRow = document.createElement('tr');
        // console.log(newRow);

        //Creating New Title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        console.log(newTitle);
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        console.log(newAuthor);
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        console.log(newYear);
        newRow.appendChild(newYear);

        //Final Touch Check
        bookList.appendChild(newRow);
    }
})
