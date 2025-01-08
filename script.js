const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const maybeBtn = document.getElementById('maybeBtn');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const movieCards = document.querySelectorAll('.movie-card');
const selectedMovieImg = document.getElementById('selectedMovieImg');
const selectedMovieName = document.getElementById('selectedMovieName');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300) + 50;
  const y = Math.floor(Math.random() * 300) + 50;
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${y}px`;
  noBtn.style.left = `${x}px`;
});
maybeBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300) + 50;
  const y = Math.floor(Math.random() * 300) + 50;
  maybeBtn.style.position = 'absolute';
  maybeBtn.style.top = `${y}px`;
  maybeBtn.style.left = `${x}px`;
});
yesBtn.addEventListener('click', () => {
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
});

movieCards.forEach(card => {
  card.addEventListener('click', () => {
    const movieName = card.getAttribute('data-movie');
    const movieImgSrc = card.querySelector('img').src;

    selectedMovieName.textContent = movieName;
    selectedMovieImg.src = movieImgSrc;

    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  });
});
