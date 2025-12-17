//****************************************************************
//                  STEP 1 
//****************************************************************

//Create a table to store leads 
 let myLeads = []

 // Connecting JavaScript file to the HTML elements to control them (read them, modify them, react to clicks, etc.).
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
//JSON.parse() → restore
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

 //****************************************************************
//                  STEP 2
//****************************************************************

// If leads exist → array → ✅ code inside runs
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage // replace empty myLeads by the saved leads from localStorage => myLeads = ["https://google.com"]
    render(myLeads)
}

 //****************************************************************
//                  STEP 3
//****************************************************************

tabBtn.addEventListener("click", function(){    
    //this is a chrome extension API that takes  tab currently active in the current window.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url) 
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

// creating a render function 
// It takes an array of leads and turns them into HTML list items, then displays them inside  <ul>.
function render(leads) {

    let listItems = "" // Initializing with an empty string (will take all the <li> elements )

    for (let i = 0; i < leads.length; i++) {


        listItems += `
                <li>
                    <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                    </a>
                </li>
                `
    }

    ulEl.innerHTML = listItems

}

// delet all of myLeads elements 
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear() // Browser deletes stored data => long-term memory
    myLeads = [] // App memory resets => short-term memory
    render(myLeads) // UI updates => screen refresh
})

// adding an evenlistener to inputBtn
inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value) // adding the new lead to the array.
  inputEl.value = "" // clearing the input field after I click.
   localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  //run render 
  render(myLeads)
});
