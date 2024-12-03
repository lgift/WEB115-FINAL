// collection of audios
var audio = new Audio('buzz.mp3');
var audio2 = new Audio('oiia-short.mp3');
var audio3 = new Audio('boykisser.mp3')
var beep = new Audio('smoke-detector-beep.mp3');
var backgroundMusic = new Audio('funny.mp3');
var victoryMusic = new Audio('banger.mp3');
var yay = new Audio ('yay.mp3')
var meow = new Audio ('meow.mp3')

backgroundMusic.loop = true
backgroundMusic.volume = 0.5
backgroundMusic.play()

let form = document.getElementById("Form")
let breakfast = document.getElementById("breakfast")
let snack1 = document.getElementById("snack1")
let lunch = document.getElementById("lunch")
let snack2 = document.getElementById("snack2")
let dinner = document.getElementById("dinner")

// MAKES LOUD ANNOYING NOISE BEEP BEEP BEEP
setTimeout(() => beep.play(), 8000)

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

    let name = document.getElementById("name").value
    let email = document.forms["Form"]["emailz"].value
    let goal = document.getElementById("Goal").value

    // creates array of meal names and their inputs
    let meals = ["BREAKFAST!!!", "SNACKIES!!", "LUNCH!!!", "SNACKIES!!!", "DINNER!!"]
    let mealInput = [breakfast.value, snack1.value, lunch.value, snack2.value, dinner.value]

    // clears webpage
    document.body.innerHTML = ''

    // Aligns celebration gifts with css to be on both sides of the screen
    document.body.style.display = 'flex'
    document.body.style.flexDirection = 'column'
    document.body.style.alignItems = 'center'
    document.body.style.margin = '0'
    document.body.style.padding = '20px'
    document.body.style.textAlign = 'center'

    let left = document.createElement("img")
    left.src = "bear-confetti.gif"
    left.style.position = 'absolute'
    left.style.left = '10px'
    left.style.top = '40%'
    left.style.width = '350px'

    let right = document.createElement("img")
    right.src = "bear-confetti.gif"
    right.style.position = 'absolute'
    right.style.right = '10px'
    right.style.top = '40%'
    right.style.width = '350px'

    document.body.appendChild(left)
    document.body.appendChild(right)

    // centers the text elements
    document.body.style.textAlign = 'center'

    let info = document.createElement("div")
    info.innerHTML =
        `<h2><b>WEEKLY MEAL PLAN!<b><h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Goal:</b> ${goal}</p>
        `

    document.body.appendChild(info)

    // creates table
    let table = document.createElement("TABLE")
    table.setAttribute("id", "Table")
    table.setAttribute("border", "5")

    // centers the table
    table.style.margin = '0 auto'

    // creates days of the week as headers
    let headers = document.createElement("TR")
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    // adds each element in the days array to the TR element to create headers
    for (let i = 0; i < 7; i++) {
        let dayname = document.createElement("TH")
        dayname.textContent = days[i]
        headers.appendChild(dayname)
    }

    table.appendChild(headers)



    // adds each meal name to the table
    for (let i = 0; i < meals.length; i++) {
        let row = document.createElement("TR")

        let inputs = document.createElement("TD")
        inputs.textContent = meals[i]
        row.appendChild(inputs)

        // adds each meal input/value to the table
        for (let z = 0; z < 6; z++) {
            var food = document.createElement("TD")
            food.textContent = mealInput[i]
            row.appendChild(food)
        }
        
        table.appendChild(row)
    }

    // creates print button, and when clicked it prompts the page to print out
    let print = document.createElement("button")
    print.textContent = "PRINT MEAL PLAN??"
    print.onclick = () => window.print()

    // creates clear button, and when clicked it reloads the page
    let clear = document.createElement("button")
    clear.textContent = "CLEAR PLAN???"
    clear.onclick = () => location.reload()

    document.body.appendChild(table)
    document.body.appendChild(print)
    document.body.appendChild(clear)

    backgroundMusic.pause()
    victoryMusic.loop = true
    victoryMusic.volume = 0.5
    yay.play()
    meow.play()
    victoryMusic.play()

}