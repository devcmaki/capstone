const notificationIcon = document.querySelector('.notification-icon');
const notificationDropdown = document.querySelector('.notification_dd');

// Toggle the notification dropdown on click
notificationIcon.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  console.log('Icon clicked'); // Debugging check
  if (notificationDropdown.style.display === 'none' || notificationDropdown.style.display === '') {
    notificationDropdown.style.display = 'block';
  } else {
    notificationDropdown.style.display = 'none';
  }
});

// Close the dropdown when clicking outside
window.addEventListener('click', (event) => {
  if (!notificationIcon.contains(event.target) && !notificationDropdown.contains(event.target)) {
    notificationDropdown.style.display = 'none';
  }
});

