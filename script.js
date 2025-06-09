// Countdown Timer for New Month
function countdown() {
    // Get the current date
    const now = new Date();
    // Get the next month
    let nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    
    // Calculate the time difference
    const timeDifference = nextMonth - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Display results
    document.getElementById('days').innerHTML = `${days} Days`;
    document.getElementById('hours').innerHTML = `${hours} Hours`;
    document.getElementById('minutes').innerHTML = `${minutes} Minutes`;
    document.getElementById('seconds').innerHTML = `${seconds} Seconds`;
}

// Update the countdown every second
setInterval(countdown, 1000);

// Initial call to display the countdown immediately
countdown();
