const modal = document.getElementById('modal');
const tryButton = document.getElementById('tryButton');
const closeModalButton = document.getElementById('closeModalButton');

if (
  tryButton instanceof HTMLButtonElement &&
  modal instanceof HTMLDivElement &&
  closeModalButton instanceof HTMLButtonElement
) {
  tryButton.addEventListener('click', () => {
    modal.classList.remove('inactive');
    modal.classList.add('active');
  });

  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.classList.add('inactive');
  });
}
