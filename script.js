document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector('.profile-img');
    const hiddenBox = document.querySelector('.hidden-box');
  
    // When the profile image is clicked:
    profileImg.addEventListener('click', function() {
        profileImg.classList.add('flip-out');
    });
  
    // Listen for the end of the opacity transition on the profile image:
    profileImg.addEventListener('transitionend', function(e) {
        if (e.propertyName === 'opacity' && profileImg.classList.contains('flip-out')) {
            profileImg.style.display = 'none';
            hiddenBox.style.display = 'block';
        }
    });
  
    // When the hidden box is clicked, reverse the process:
    hiddenBox.addEventListener('click', function() {
        hiddenBox.style.display = 'none';
        profileImg.style.display = 'block';
        // Remove the flip class so the image resets
        profileImg.classList.remove('flip-out');
    });
  });
  