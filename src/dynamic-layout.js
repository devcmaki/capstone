document.getElementById('toggle-mid-panel').addEventListener('click', function() {
  const midPanel = document.getElementById('mid-panel');
  const leftPanel = document.querySelector('.left-panel');

  if (midPanel.classList.contains('hidden')) {
      // Show mid panel
      midPanel.classList.remove('hidden');
      leftPanel.classList.remove('full-width');
      //this.innerHTML = '&laquo;';  // Change button icon to mid arrow
  } else {
      // Hide mid panel
      midPanel.classList.add('hidden');
      leftPanel.classList.add('full-width');
      //this.innerHTML = '&raquo;';  // Change button icon to left arrow
  }
});

document.getElementById('toggle-right-panel').addEventListener('click', function() {
  const rightPanel = document.getElementById('right-panel');

  if (rightPanel.classList.contains('hidden')) {
      // Show right panel
      rightPanel.classList.remove('hidden');
      leftPanel.classList.remove('full-width');
      //this.innerHTML = '&laquo;';  // Change button icon to right arrow
  } else {
      // Hide right panel
      rightPanel.classList.add('hidden');
      leftPanel.classList.add('full-width');
      //this.innerHTML = '&raquo;';  // Change button icon to left arrow
  }
});