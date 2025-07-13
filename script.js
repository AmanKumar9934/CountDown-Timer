let countdownInterval;

function startCountdown() {
  const input = document.getElementById("datetime-input").value;
  const targetTime = new Date(input).getTime();
  const message = document.getElementById("message");

  if (!input || isNaN(targetTime)) {
    message.textContent = "Please enter a valid date and time.";
    return;
  }

  clearInterval(countdownInterval); // Clear previous countdown if any

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "";
      message.textContent = "Countdown Complete!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    message.textContent = "";
  }, 1000);
}