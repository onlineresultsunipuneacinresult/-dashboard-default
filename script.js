document.getElementById("resultForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const seatNo = document.getElementById("seatNo").value;
  const motherName = document.getElementById("motherName").value;
  const captcha = document.getElementById("captcha").value;

  if (captcha === "12345") {
    const imgURL = "https://pbs.twimg.com/media/FEiwbZfVEAcWD0T.jpg"; // Replace with the correct directURL
    window.open(imgURL, "_blank"); // Opens the image in a new tab
  } else {
    alert("Invalid Captcha!");
  }
});
