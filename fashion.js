function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");
  
    function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        countdownElement.textContent = "Time's up!";
        clearInterval(interval);
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call it immediately to avoid the 1-second delay
  }
  
  // Set your target date here (year, month (0-based), day, hour, minute, second)
  const targetDate = new Date(2024, 11, 31, 23, 59, 59); // Example: December 31, 2024, 11:59:59 PM
  
  startCountdown(targetDate);

  //////////////////////////////////////////////////////////////
  // page5
  
    document.addEventListener('DOMContentLoaded', function () {
        // Get all heart icon elements
        const heartIcons = document.querySelectorAll('.heart-icon');
        const saveIcons = document.querySelectorAll('.save-icon');

        // Loop through each heart icon and add click event listener
        heartIcons.forEach(heartIcon => {
            heartIcon.addEventListener('click', function() {
                // Toggle between outlined heart (fa-heart-o) and filled heart (fa-heart)
                if (heartIcon.classList.contains('fa-heart-o')) {
                    heartIcon.classList.remove('fa-heart-o');
                    heartIcon.classList.add('fa-heart');
                    heartIcon.style.color = 'red';
                } else {
                    heartIcon.classList.remove('fa-heart');
                    heartIcon.classList.add('fa-heart-o');
                    heartIcon.style.color = ''; // Reset to default color (white)
                }
            });
        });

        // Loop through each save icon and add click event listener
        saveIcons.forEach(saveIcon => {
            saveIcon.addEventListener('click', function() {
                // Toggle between outlined bookmark (fa-bookmark-o) and filled bookmark (fa-bookmark)
                if (saveIcon.classList.contains('fa-bookmark-o')) {
                    saveIcon.classList.remove('fa-bookmark-o');
                    saveIcon.classList.add('fa-bookmark');
                    saveIcon.style.color = 'white';
                } else {
                    saveIcon.classList.remove('fa-bookmark');
                    saveIcon.classList.add('fa-bookmark-o');
                    saveIcon.style.color = ''; // Reset to default color (white)
                }
            });
        });
    });



   
  