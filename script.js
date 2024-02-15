document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('birthdaySong');
    
    // Check if the audio is paused or ended, then play it
    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        // If it's playing, pause it
        audio.pause();
    }
});
