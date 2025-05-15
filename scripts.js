// Smooth scroll
$('nav ul li a').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 600);
  });
  
  function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
  