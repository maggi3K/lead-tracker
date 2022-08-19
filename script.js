//myLeads = JSON.parse(myLeads);

//myLeads.push("newvaluehopefully");

//myLeads = JSON.stringify(myLeads);

//console.log(typeof myLeads);



//myLeads = JSON.stringify(myLeads);

//myLeads = JSON.parse(myLeads); -koga ima string, koristime parse za da se naprai array , koga ima array koristime .stringify

//myLeads.push("www.epiclead.com");

//console.log(typeof myLeads)


let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const tabBtn = document.getElementById("tab-btn");



if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render();
}


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })  
}) 

function render(leads) {
    let listItems = "";

    for (i = 0; i < leads.length; i++) {
        listItems += `
           <li>
              <a target='_blank' href='${leads[i]}'> 
                  ${leads[i]} 
              </a>
            </li>
    `
    }

    ulEl.innerHTML = listItems;

}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);

    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);

    console.log( localStorage.getItem("myLeads"));
})








//const recipient = "James";
//const sender = "Maggie"
//const email = "Hey " + recipient + "! How is it going? Cheers Per";
//const email = `Hey ${recipient}! How is it going? Cheers ${sender}`
//console.log(email);

/*
function renderLeads() {
    let listItems = "";
    for (i = 0; i < myLeads.length; i++) {
        
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
        <li>
           <a target='_blank' href='${myLeads[i]}'> 
              ${myLeads[i]} 
            </a>
        </li>
    `
    //const li = document.createElement("li");
    //li.textContent = myLeads[i];
    //ulEl.append(li);
    }

    ulEl.innerHTML = listItems;

}




const welcomeEl = document.getElementById("welcome-el");


function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}` 
}

greetUser("Howdy", "James!");

function add(num1, num2) {
    return num1 + num2;
}

console.log( add(3, 4));




function getFirst(arr) {
    return arr[0];
}

let firstCard = getFirst([10, 2, 5]);

console.log(firstCard)

*/

/*
 //1


const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;

points += 100;
hasWon = true;

if (hasWon)  {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}


//2


let myCourses = ["Learn CSS Animation", "UI Design Fundamentals", "Intro to clean Code"];


function logItems (arr) {
    for (i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

logItems(myCourses);

*/

//3

//let someValue = "Nikola Nikolovski"

//localStoraget.setItem(someValue)