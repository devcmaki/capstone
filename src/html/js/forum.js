const profilePicture = document.getElementById('profile-picture');
const fileInput = document.getElementById('file-input');
const modal = document.getElementById('confirmation-modal');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
let newImage = null;

profilePicture.addEventListener('click', () => {
    fileInput.click();  // Trigger the file input dialog
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        newImage = URL.createObjectURL(file);  // Create a URL for the new image
        modal.style.display = 'flex';  // Show the confirmation modal
    }
});

saveBtn.addEventListener('click', () => {
    if (newImage) {
        document.getElementById('profile-image').src = newImage;  // Change profile picture
        newImage = null;  // Reset the new image
    }
    modal.style.display = 'none';  // Hide the modal
});

cancelBtn.addEventListener('click', () => {
    newImage = null;  // Reset the new image
    modal.style.display = 'none';  // Hide the modal
});

// Close the modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

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


