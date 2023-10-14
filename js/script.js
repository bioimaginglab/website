$(document).ready(function() {
    // Load home.html by default
    $("#home").load("home.html");
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".section");
    const contentArea = document.querySelector(".content");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            contentArea.style.display = "block";

            // Show the target section
            const targetId = this.getAttribute("data-section");
            const targetSection = document.getElementById(targetId);

            // Check if the link is for 'home'
                // Fetch the content of home.html and insert it into the target div
            fetch(targetId+'.html')
            .then(response => response.text())
            .then(data => {
                targetSection.innerHTML = data;
            });

            targetSection.style.display = "block";
        });
    });
});
