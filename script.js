document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const images = carousel.querySelectorAll('img'); // Get all images
      const prevBtn = carousel.querySelector('.prev-btn'); // Get the "Previous" button
      const nextBtn = carousel.querySelector('.next-btn'); // Get the "Next" button
      let currentIndex = 0; // Start with the first image
  
      console.log("Carousel initialized");
      console.log("Total images in carousel:", images.length);
  
      // Show the first image (make sure this matches the initial setup)
      images[currentIndex].classList.add('active');
      console.log("Initial active image index:", currentIndex);
  
      // Next button functionality
      nextBtn.addEventListener('click', () => {
        console.log("Next button clicked");
  
        // Remove the active class from the current image
        images[currentIndex].classList.remove('active');
        console.log(`Image at index ${currentIndex} deactivated`);
  
        // Increment the index and loop back if it's the last image
        currentIndex = (currentIndex + 1) % images.length;
        console.log("New active index after next:", currentIndex);
  
        // Add the active class to the new image
        images[currentIndex].classList.add('active');
        console.log(`Image at index ${currentIndex} activated`);
      });
  
      // Previous button functionality
      prevBtn.addEventListener('click', () => {
        console.log("Previous button clicked");
  
        // Remove the active class from the current image
        images[currentIndex].classList.remove('active');
        console.log(`Image at index ${currentIndex} deactivated`);
  
        // Decrement the index and loop back if it's the first image
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        console.log("New active index after previous:", currentIndex);
  
        // Add the active class to the new image
        images[currentIndex].classList.add('active');
        console.log(`Image at index ${currentIndex} activated`);
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const images = carousel.querySelectorAll('img'); // Get all images
      const prevBtn = carousel.querySelector('.prev-btn'); // Get the "Previous" button
      const nextBtn = carousel.querySelector('.next-btn'); // Get the "Next" button
      let currentIndex = 0; // Start with the first image
  
      // Show the first image (make sure this matches the initial setup)
      images[currentIndex].classList.add('active');
  
      // Next button functionality
      nextBtn.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      });
  
      // Previous button functionality
      prevBtn.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
      });
  
     // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.modal .close');

    // Open modal on image click
    images.forEach(image => {
      image.addEventListener('click', () => {
        modalImg.src = image.src; // Set modal image source
        modal.classList.add('show'); // Add "show" class to display modal
      });
    });

    // Close modal on close button click
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show'); // Remove "show" class to hide modal
    });

    // Close modal on clicking outside the image
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.classList.remove('show'); // Remove "show" class to hide modal
      }
    });
  });
});
