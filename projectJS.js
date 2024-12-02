var audio = new Audio('buzz.mp3');
var audio2 = new Audio('oiia-short.mp3');
var audio3 = new Audio('boykisser.mp3')
var beep = new Audio('smoke-detector-beep.mp3');

let form = document.getElementById("Form")
let breakfast = document.getElementById("breakfast")
let snack1 = document.getElementById("snack1")
let lunch = document.getElementById("lunch")
let snack2 = document.getElementById("snack2")
let dinner = document.getElementById("dinner")

// MAKES LOUD ANNOYING NOISE BEEP BEEP BEEP
setTimeout(beep.play(), "8000")

// If email is empty, then play three loud annoying noises and be like NO!
function validateForm() {
    let i = document.forms["Form"]["emailz"].value
    if (i == "") {
        audio.play()
        audio2.play()
        audio3.play()
        alert("WRONG! FILL OUT EMAIL")
        return false
    }

    else {
        generate()
    }
}
function generate() {
    let table = document.getElementById("TABLE")
    table.setAttribute("id", "Table")
    table.setAttribute("border", "2")
    document.body.appendChild(table)

    let header = document.createElement("TR")
    let headerCell1 = document.createElement("TH")
    let headerCell2 = document.createElement("TH")

    headerCell1.textContent = "MONDAY"
    headerCell2.textContent = "TUESDAY"

    table.appendChild(header)

    let newRow = document.createElement("TR")
    let cell1 = document.createElement("TD")
    let cell2 = document.createElement("TD")

    cell1.textContent = "hi"
    cell2.textContent = "hi2"

    newRow.appendChild(cell1)
    newRow.appendChild(cell2)

    table.appendChild(newRow)

    document.write(breakfast.value)
    document.write("<br>")
    document.write(snack1.value)
    document.write("<br>")
    document.write(lunch.value)
    document.write("<br>")
    document.write(snack2.value)
    document.write("<br>")
    document.write(dinner.value)
    form.remove()
}