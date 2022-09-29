
const inputBtn = document.getElementById("input-btn")
const showBtn = document.getElementById("show-btn")
let myLeads = [localStorage.getItem("leads")]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const buy = document.getElementById("box")
const clearBtn = document.getElementById("clear-btn")


/*testLeads.push("www.knoblauch.de")
testLeads.push("www.zwiebeln-schneiden.de")
testLeads.push("käse-reiben.de")
localStorage.setItem("leads", JSON.stringify(testLeads))
*/
//ulEl.innerHTML = JSON.parse(localStorage.getItem("leads"))

clearBtn.addEventListener("click", function () {
    localStorage.clear()
    ulEl.innerHTML = ""
})

showBtn.addEventListener("click",function() {
    for(i=0; i<localStorage.length; i++){
        ulEl.innerHTML = localStorage.getItem("lead "+i)
    }
    
})

buy.innerHTML = "<button id='buyBtn'>BUY!!</button"
const buyBtn = document.getElementById("buyBtn")

buyBtn.addEventListener("click", function() {
    buy.innerHTML += "<p>Thank you for buying!!!</P>"
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("leads",JSON.stringify(myLeads))
    ulEl.textContent = ""

    if (inputEl != ""){
    for (i=0; i<myLeads.length;i++){
      //  localStorage.setItem("lead "+i, myLeads[i])
        //ulEl.innerHTML += "<li><a target='_blank' href='" + myLeads[i] + "'>" +myLeads[i]+"</a></li>"
      
      //temlate string!
      
        ulEl.innerHTML += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        /*const a = document.createElement("a")
        const li = document.createElement("li")
        li.innerHTML = myLeads[i]
        a.innerHTML = li.innerHTML
        ulEl.append(a)
        */
    }
    inputEl.value = ""
}
})



