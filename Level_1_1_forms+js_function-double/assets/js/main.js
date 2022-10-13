// function logInputValue(event) {
// event.preventDefault();
// const name = document.getElementById("feldname").value;
// const name = document.getElementById("feldnummer").value;
// const name = document.getElementById("range").value;
// const name = document.getElementById("checkbox").value;
// const name = document.getElementById("date").value;

// const output = "Name " + name + " age " + age " range " + range

// console.log(output)
// document.getElementById("output").innerHTML = output;

// document.getElementById("feldname");
// let msg = document.querySelector("#feldname").value;
// console.log()

// function logInputValue(event) {
//     event.preventDefault();

//     let feldname = document.querySelector("#feldname").value;

//     const output = "feldname"

// }



// const submit = document.getElementById("verdoppel mich");

// const submit = document.getElementById("submit");


function haus(event) {
    event.preventDefault();
    const number = document.getElementById("number").value;

    let zahl = number * 2;


    document.getElementById("output").innerHTML = zahl;



}

