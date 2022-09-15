let name = prompt("Please enter your name!");
document.querySelector("#myName").innerHTML = name;

function time() {
    let date = new Date().toLocaleString('tr-TR');
    document.querySelector("#clock").innerHTML = date;
}
setInterval(time, 1000); 