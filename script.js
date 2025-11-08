// Age verification
window.onload = function() {
    var agePopup = document.getElementById("agePopup");
    agePopup.style.display = "flex";

    document.getElementById("yesBtn").onclick = function() {
        agePopup.style.display = "none";
    }

    document.getElementById("noBtn").onclick = function() {
        alert("You must be 18 or older to enter this site.");
        window.location.href = "https://www.google.com"; // Redirect to safe page
    }
}

// Video pause/play functionality (optional)
// var video = document.getElementById("myVideo");
// var btn = document.getElementById("myBtn");
// function myFunction() {
//   if(video.paused) { video.play(); btn.innerHTML="Pause"; }
//   else { video.pause(); btn.innerHTML="Play"; }
// }
