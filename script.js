
setInterval(clock,1000)

function clock () {
    let hourElement = document.getElementById("hour")
    let minuteElement = document.getElementById("minute")
    let secondElement = document.getElementById("second")
    let dayOfWeekElement = document.getElementById("dayOfWeek")
    let dayOfYearElement = document.getElementById("dayOfYear")
    
    let date = new Date()
    let hour = addZero(date.getHours())
    let minute = addZero(date.getMinutes())
    let second = addZero(date.getSeconds())
    let dayOfYear = date.toLocaleDateString()
    let dayOfWeek = date.getDay()
    let daysOfWeek = ["Domingo","Segunda-Feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
    
    hourElement.innerHTML = hour
    minuteElement.innerHTML = minute
    secondElement.innerHTML = second
    daysOfWeek.forEach((day,ind) => {
        if(dayOfWeek === ind) dayOfWeekElement.innerHTML = day
    })
    dayOfYearElement.innerHTML = dayOfYear   
}

// function that adds zero to the left (03:01:00) insted (3:1:0)
function addZero(n){
    if(n < 10) n = "0" + n
    return n
}



