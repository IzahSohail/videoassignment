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
  
      if (choice === 'walk') {
        nextVideoSource = 'videos/vid2.mp4';
      } else {
        nextVideoSource = 'videos/vid3.mp4';
      }
  
      // Change the video source and play the next video
      videoPlayer.src = nextVideoSource;
      videoPlayer.load(); // Reload the video element
      videoPlayer.play();

      // Show the option buttons at the end of the second video
      videoPlayer.addEventListener('ended', function () {
        optionButtons.classList.add('hidden'); // Hide the option buttons
        secondOptionButtons.classList.remove('hidden');

      });
      //function to play the next video based on user choice

      window.playNextVideo = function (choice) {
        secondOptionButtons.classList.add('hidden'); // Hide the option buttons
        let nextVideoSource;
    
        if (choice === 'tellFriend') {
          nextVideoSource = 'videos/vid1.mp4';
        } else {
          nextVideoSource = 'videos/vid3.mp4';
        }
    
        // Change the video source and play the next video
        videoPlayer.src = nextVideoSource;
        videoPlayer.load(); // Reload the video element
        videoPlayer.play();
    
        // Show the option buttons at the end of the third video
        videoPlayer.addEventListener('ended', function () {
          optionButtons.classList.add('hidden'); 
          secondOptionButtons.classList.add('hidden'); //hide all option buttons
        });
      };
    };
});
  