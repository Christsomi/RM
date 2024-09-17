function closeWarning(type) {
  document.getElementById(type).style.display = 'none';
}

function checkWindowSize(minWidth, minHeight) {
  const unavailableMessage = document.getElementById('unavailableMessage');
  const pageContent = document.getElementById('pageContent');

  function updateVisibility() {
      if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
          unavailableMessage.style.display = 'block';
      } else {
          unavailableMessage.style.display = 'none';
      }
  }

  // Initial check
  updateVisibility();

  // Check on window resize
  window.addEventListener('resize', updateVisibility);
}

checkWindowSize(1000, 500);