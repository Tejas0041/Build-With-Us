function updateCountdown() {

    var targetDate = new Date("2024-04-04T18:00:00");
    var currentDate = new Date();

    var timeDifference = targetDate.getTime() - currentDate.getTime();

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    var countdownTimer = document.getElementById("countdown-timer");
    if(timeDifference<0){
        countdownTimer.textContent= "Expired";
    }else countdownTimer.textContent = days + " : " + hours + " : " + minutes + " : " + seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

const bt= document.getElementById("registerNow-button');
bt.addEventListener('click', ()=>{
    alert("Registration Starting Soon...");
})
