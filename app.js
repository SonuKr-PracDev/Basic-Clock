
date = () => {
    let t = document.getElementById("Time")
    let d = document.getElementById("Date")
    let myDate = new Date()
    let a;
    if(myDate.getHours() < 12 && myDate.getMinutes()<60)
        a = "am"
    else
        a = "pm"
    let date = myDate.getDate() +"/"+ myDate.getMonth() + "/" + myDate.getFullYear()
    let time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + " " + a
    t.innerText = "Time: " + time
    d.innerText = "Date: " + date
    console.log("Hello")
}
clr = setInterval(date, 1000)
StopInterval = () =>{
    clearInterval(clr)
    alert("Timer stopped")
}
setTimeout(StopInterval, 20000)