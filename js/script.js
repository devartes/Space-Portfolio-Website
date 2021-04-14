// SCRIPT

$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
    });
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // SCRIPT MENU/NAVBAR
    $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    })
  });
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  //  ANIMAÇÃO DE DIGITAÇÃO
  var typed = new Typed(".typing", {
    strings: ["Designer", "Desenhista", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
  
  var typed = new Typed(".typing-2", {
    strings: ["Designer", "Desenhista", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
  // ~~~~~~~~~~~~~~~~~~~~~~~
  
  // SOLUÇÃO PARA O PROBLEMA DO SCROLL
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
    // ~~~~~~~~~~~~~~~~~~~~~~~
  
  
