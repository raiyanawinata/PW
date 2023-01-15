let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
         document.querySelector('.controls .caro-active').classList.remove('caro-active');
        btn.classList.add('caro-active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

$('.slide-center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


