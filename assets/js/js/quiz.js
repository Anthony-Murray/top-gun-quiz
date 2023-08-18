const startButton = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');

startButton.addEventListener('click', () => {
  console.log('Test start button.');
  startButton.style.display = 'none';
  optionsContainer.style.display = 'block';
});