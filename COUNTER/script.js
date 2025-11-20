let name = "Siré"
let addName = document.getElementById("prenom")
addName.textContent += name

let count = 0
let counText = document.getElementById("countdown")
counText.textContent = count

let incrementBtn = "INCREMENT"
let addCount = document.getElementById("increase-btn")
addCount.textContent = incrementBtn

function increment(){
    count += 1
    counText.textContent = count
    console.log(count)
}

let saveBtn = "SAVE"
let saveCount = document.getElementById("save-btn")
saveCount.textContent = saveBtn

let previousText = "Previous entires : "
let savePrevious = document.getElementById("previous")
savePrevious.textContent = previousText

function save() {
    let underscor = " - "
    savePrevious.textContent += count + underscor
    count = 0
    counText.textContent = count 

}


