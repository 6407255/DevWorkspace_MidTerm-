document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('profileImg');
  const avatarText = document.querySelector('.avatar-text');
  const clickBtn = document.getElementById('clickMeBtn');

  // Avatar fallback logic
  img.onload = () => {
    avatarText.style.display = 'none';
    img.style.display = 'block';
  };

  img.onerror = () => {
    img.style.display = 'none';
    avatarText.style.display = 'flex';
  };

  // Click Me button alert
  clickBtn.addEventListener('click', () => {
    alert("Thanks for visiting my portfolio!");
  });
});
