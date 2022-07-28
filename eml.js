
// confirm
let visitpost = confirm("Do you want to visit institute eml site")
if (visitpost) {
    alert("Thank You");
}
else {
    alert("See you next time");
}
// promt
let name = prompt("What is your name", "Guest");
// alert
alert("Welcome To The Institute EML Site");

setInterval(() => {
    time.innerHTML=newDate();
}, 1000);

setInterval(Updatetime, 1000);
function Updatetime() {
    time.innerHTML = new Date();
}

// let title = document.getElementById('title');
// title.addEventListener('mouseover', function run() { alert("Your Cursor is inside") });
// title.addEventListener('mouseout', function run() { alert("Your Cursor is outside") });