document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.getElementById('arrow');
    const line = document.getElementById('line');
  
    let isDragging = false;
  
    arrow.addEventListener('mousedown', function (e) {
      isDragging = true;
      arrow.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
  
      const lineRect = line.getBoundingClientRect();
      let x = e.clientX - lineRect.left;
  
      // so the arrow stays within the line
      if (x < 0) x = 0;
      if (x > lineRect.width) x = lineRect.width;
  
      arrow.style.left = `${x}px`;
    });
  
    document.addEventListener('mouseup', function () {
      isDragging = false;
      arrow.style.cursor = 'grab';
    });
  });
  