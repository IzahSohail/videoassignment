document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const optionButtons = document.getElementById('optionButtons');
  
    videoPlayer.addEventListener('ended', function () {
      // Show the option buttons at the end of the first video
      optionButtons.classList.remove('hidden');
    });
  
    // Function to play the next video based on user choice
    window.playNextVideo = function (choice) {
      optionButtons.classList.add('hidden'); // Hide the option buttons
      let nextVideoSource;
  
      if (choice === 'eat') {
        nextVideoSource = 'videos/vid2.mp4';
      } else {
        nextVideoSource = 'videos/vid3.mp4';
      }
  
      // Change the video source and play the next video
      videoPlayer.src = nextVideoSource;
      videoPlayer.load(); // Reload the video element
      videoPlayer.play();
    };
});
  