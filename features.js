// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image hover zoom effect for gallery images
document.querySelectorAll('header img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.5s ease';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

document.getElementById('myIcon').addEventListener('click', function() {
    // 假设 alternate-icon.png 是点击后要显示的图标
    var alternateIconPath = '/Users/sunzhengying/276_pw/duck.ico';
    var originalIconPath = '/Users/sunzhengying/276_pw/cat.ico';

    if (this.src.includes('cat.ico')) {
        this.src = alternateIconPath;
    } else {
        this.src = originalIconPath;
    }
});

// Dynamically create a 'Back to Top' button
var backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = 'Top';
backToTopBtn.id = 'backToTopBtn';
document.body.appendChild(backToTopBtn);

// Show/hide the 'Back to Top' button based on scroll position
window.onscroll = function() {
    var topButton = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

// Scroll to top functionality
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
