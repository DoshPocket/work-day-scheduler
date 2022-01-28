let pastPresentFuture = document.querySelectorAll(".description");
const pastPresentFutureArr = Array.from(pastPresentFuture);
console.log(pastPresentFutureArr)

$("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss A"));

for (i=0; i < pastPresentFutureArr.length; i++) {
    let pastPresentFutureEl = pastPresentFutureArr[i];
    let currentTime = parseInt(moment().format("k"));
    let pastPresentFutureVal = parseInt(pastPresentFutureEl.getAttribute("id"));
    console.log(pastPresentFutureEl.getAttribute("id"));

    if (pastPresentFutureVal == currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 present");
    } else if (pastPresentFutureVal < currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 past");
    } else if (pastPresentFutureVal > currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 future");
    // pastPresentFutureEl.getAttribute("id")

    }
}