document.addEventListener('DOMContentLoaded', () => {
  // Modal elements
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeModal = document.querySelector('.modal .close');

  // Iterate over each carousel element
  document.querySelectorAll('.carousel').forEach(carousel => {
    // Remove any navigation buttons if they exist
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    if (prevBtn) prevBtn.remove();
    if (nextBtn) nextBtn.remove();

    // Select the single image in the carousel
    const image = carousel.querySelector('img');
    if (image) {
      // Attach a click event to open the modal with an enlarged image
      image.addEventListener('click', () => {
        modalImg.src = image.src;
        modal.classList.add('show'); // Assumes your CSS reveals the modal when "show" class is added
      });
    }
  });

  // Close modal when the close icon is clicked
  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close modal when clicking outside the modal image (on the overlay)
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
});
