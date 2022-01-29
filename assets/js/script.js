let pastPresentFuture = document.querySelectorAll(".description");
const pastPresentFutureArr = Array.from(pastPresentFuture);
const saveButton = document.querySelectorAll(".btn")
console.log(pastPresentFutureArr)
console.log(saveButton)

$("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss A"));

for (i=0; i < pastPresentFutureArr.length; i++) {
    let pastPresentFutureEl = pastPresentFutureArr[i];
    let currentTime = parseInt(moment().format("k"));
    let pastPresentFutureVal = parseInt(pastPresentFutureEl.getAttribute("id"));

    if (pastPresentFutureVal == currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 present");
    } else if (pastPresentFutureVal < currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 past");
    } else if (pastPresentFutureVal > currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 future");
    }
}

// saveButton.addEventListener
//     saveButton.addEventListener("click", function(event) {
//       let saveButtonVal = event.target.className.split(' ')[0];
   
//         console.log(saveButtonVal);
//     });
//      let textAreaInput = document.querySelector(".text");
//      console.log(textAreaInput)
 
// for loop for buttons
for (i=0; i < saveButton.length; i++) {
    let saveButtonEl = saveButton[i];
    saveButtonEl.addEventListener("click", function(event) {
        let buttonClassName = saveButtonEl.getAttribute("id")
        console.log(event)
        console.log(buttonClassName[buttonClassName.length-3]);
    
        let idx = buttonClassName[buttonClassName.length-2]+buttonClassName[buttonClassName.length-1];
        console.log(idx)
        if (idx[0] === "0") {
            idx = idx[1]
        }
        let eventText = document.getElementById(idx).value;

        console.log(eventText)
   
    })
 
    let saveButtonVal = (saveButtonEl.getAttribute("id"));

  

};

// function renderLastRegistered() {
//     let eventText = localStorage.getItem("eventText");
  
//     if (!eventText) {
//       return;
//     }
  
//     // userEmailSpan.textContent = email;
//     // userPasswordSpan.textContent = password;
//   }
//     saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     let eventText = document.querySelector("textarea").value;
  
//     if (eventText === "") {
//       displayMessage("Error", "Empty event cannot be saved");
//     } else {
//       displayMessage("Saved successfully");
  
//       localStorage.setItem("eventText", eventText);
//       renderLastRegistered();
//     }
// });
