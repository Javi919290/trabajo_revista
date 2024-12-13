let slideIndex = 1;
showSlides(slideIndex);

// Pasar fotos
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Formulario
    $('.form-form').on('submit', function(event) {
        event.preventDefault();
        $('#errorName').text('');
        $('#errorEmail').text('');
        const nombre = $('.name').val().trim();
        const email = $('.email').val().trim();
        let valido = true;
        if (nombre === '' || !/^[A-Za-z\s]{3,20}$/.test(nombre)) {
            $('#errorName').text('Por favor, introduce un nombre.');
            valido = false;
        }
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            $('#errorEmail').text('Por favor, introduce un email correcto.');
            valido = false;
        }
        if (valido) {
            console.log({ nombre, email});
            showModal();
        }
    });
    
    // Ventana modal - formulario
    function showModal() {
        const susc = document.getElementById('suscWindow');
        susc.classList.add('show-modal'); 
            const closeModal = () => {
            susc.classList.remove('show-modal');
        };
        document.querySelector('.close').onclick = closeModal;
        window.onclick = function(event) {
            if (event.target === susc) {
                closeModal();
            }
        };
    };