const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;

// JavaScript to toggle the
// visibility of the navigation menu
document.addEventListener("DOMContentLoaded",
	function () {
		const hamburger = document.getElementById("hamburger");
		const navbar = document.querySelector(".navbar");

		hamburger.addEventListener("click", function () {
			navbar.classList.toggle("active");
		});
	});

window.addEventListener("scroll", () => {
	navbar.classList.remove("active");
});

function showSlide(nextIndex) {
	slides[index].classList.remove("active");
	index = (nextIndex + slides.length) % slides.length;
	slides[index].classList.add("active");
}

function next() {
	showSlide(index + 1);
}

function prev() {
	showSlide(index - 1);
}

// Add event listener for click event on dropdown button
document.querySelector('.dropbtn').addEventListener('click', function() {
    // Toggle the dropdown visibility
    document.querySelector('.dropdown').classList.toggle('active');
  });
  
  // Close the dropdown if clicked outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
      // If the click is outside the dropdown, hide the menu
      document.querySelector('.dropdown').classList.remove('active');
    }
  });
  