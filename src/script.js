//$(document).ready(() => {
 //const slickOptions = {
    // autoplay: true,
     //dots: false, 
     //pauseOnHover: false,
     //prevArrow:
    //'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    // nextArrow:
  //  '<button type="button" class="slick-next  slider__next-arrow">Next</button>;',
//  };

//$('.slider').slick(slickOptions);

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
   fade: true,
  cssEase: 'linear',
  arrows:true,
  autoplay: true,
  autoplaySpeed: 8000,
})

$('.footer__form-button').on('click', () => {
const Email = $('#email').val();
Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "email",
    Subject : "por favor me add na newslwtter",
    Body : `Olá,
    
    Eu gostaria de ser add na  newsletter do site.
    Meu email é ${email}.
    
    Obrigado!
    `, 
    }).then(
   (message) => alert(message)
  );
 });
