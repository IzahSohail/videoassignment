document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.getElementById('arrow');
    const line = document.getElementById('line');
  
    let isDragging = false;

    // Set the initial position of the arrow as a percentage of the screen width
    const initialArrowPosition = 32; // 20% from the left
    const initialArrowLeft = (window.innerWidth * initialArrowPosition) / 100;
    arrow.style.left = `${initialArrowLeft}px`;

    arrow.addEventListener('mousedown', function (e) {
      isDragging = true;
      arrow.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
  
      const lineRect = line.getBoundingClientRect();
      let x = e.clientX - lineRect.left;
  
      // Ensure the arrow stays within the bounds of the line
      if (x < 0) x = 0;
      

      
      if (x > lineRect.width-30) {
        // Redirect to "video.html" when the arrow reaches the right edge
        window.location.href = 'video.html';
        return;
      }
      // display each line of about video section based on the slider position
      if (x > lineRect.width-605) {
        document.getElementById('line1').style.opacity = 1;}

      if (x > lineRect.width-405) {
        document.getElementById('line2').style.opacity = 1;}
        
      if (x > lineRect.width-345) {
        document.getElementById('line3').style.opacity = 1;}
    
      if (x > lineRect.width-205) {
        document.getElementById('line4').style.opacity = 1;}

    


  
      arrow.style.left = `${lineRect.left + x}px`;
    });
  
    document.addEventListener('mouseup', function () {
      isDragging = false;
      arrow.style.cursor = 'grab';
    });

    // Update the arrow position on window resize
    window.addEventListener('resize', function () {
      const newArrowLeft = (window.innerWidth * initialArrowPosition) / 100;
      arrow.style.left = `${newArrowLeft}px`;
    });
    
    
});

