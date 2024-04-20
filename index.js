setInterval(clock, 1000);

function clock() {
    let date = new Date();
    document.getElementById("time").innerHTML= 
    date.getHours() + ":" +
    date.getMinutes() + ":" +
    date.getSeconds();
}