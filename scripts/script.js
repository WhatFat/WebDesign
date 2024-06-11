document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
    };

    var swiper = new Swiper('.home-slider', {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.querySelectorAll('.box.lightgallery').forEach(function(box) {
        box.addEventListener('click', function(event) {
            event.preventDefault();
            lightGallery(box.nextElementSibling, {
                dynamic: true,
                dynamicEl: Array.from(box.nextElementSibling.querySelectorAll('a')).map(function(anchor) {
                    return {
                        'src': anchor.getAttribute('href'),
                        'thumb': anchor.querySelector('img') ? anchor.querySelector('img').getAttribute('src') : anchor.getAttribute('href')
                    };
                })
            });
        });
    });

    document.getElementById("Logo").addEventListener("click", function() {
        window.location.href = "file:///C:/Users/herak/OneDrive/Dokumentumok/Project/index.html";
    });

    const links = document.querySelectorAll('.header .navbar a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!this.classList.contains('active')) {
                event.preventDefault();
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                setTimeout(() => {
                    window.location.href = this.href;
                }, 0);
            }
        });
    });

    document.getElementById("home-btn").addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function toggleContactDetails(employee) {
    var contactDetails = employee.querySelector('.contact-details');
    if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
}