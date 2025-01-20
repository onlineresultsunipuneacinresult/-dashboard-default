document.getElementById("resultForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const seatNo = document.getElementById("seatNo").value;
  const motherName = document.getElementById("motherName").value;
  const captchaInput = document.getElementById("captcha").value;
  const captchaCode = document.getElementById("captchaDisplay").textContent;

  if (captchaInput === captchaCode) {
    const imgURL = "https://pbs.twimg.com/media/FEiwbZfVEAcWD0T.jpg"; // Replace with your direct image URL
    window.open(imgURL, "_blank"); // Opens the image in a new tab in full screen
  } else {
    alert("Incorrect CAPTCHA! Please try again.");
  }
});

function generateCaptcha() {
  const captcha = Math.floor(Math.random() * 90000) + 10000; // Random 5-digit number
  document.getElementById("captchaDisplay").textContent = captcha;
}

// Generate a CAPTCHA when the page loads
generateCaptcha();
