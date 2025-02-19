document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transition = 'opacity 2s';
    }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    footer.style.opacity = '0';
    setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transition = 'opacity 2s';
    }, 500);
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'  
            });
        }
    });
});