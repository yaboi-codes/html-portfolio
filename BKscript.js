// Select the FIRST element with the class 'row'
const rowElement = document.querySelector('.row');

// Select the FIRST element with the class 'col'
const colElement = document.querySelector('.col');

// Define the media query (500px or less)
const mediaQuery = window.matchMedia('(max-width: 500px)');

function handleTabletChange(e) {
  // Check if the media query is true (i.e., screen width is 500px or less)
  if (e.matches) {
    // If a 'row' element was found, remove its 'row' class
    if (rowElement) {
      rowElement.classList.remove('row');
    }
    // If a 'col' element was found, remove its 'col' class
    if (colElement) {
      colElement.classList.remove('col');
    }
  } else {
    // Optional: If you want to add the classes back when the screen size is larger than 500px
    // if (rowElement && !rowElement.classList.contains('row')) {
    //   rowElement.classList.add('row');
    // }
    // if (colElement && !colElement.classList.contains('col')) {
    //   colElement.classList.add('col');
    // }
  }
}

// Register event listener to call handleTabletChange whenever the media query state changes
mediaQuery.addListener(handleTabletChange);

// Perform an initial check immediately when the script loads
handleTabletChange(mediaQuery);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(
      this.getAttribute('href')
    ).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});
