window.addEventListener('load', function(){

  var gliders = document.querySelectorAll('.glider');
  console.log(gliders);

  for(i=0; i< gliders.length; i++) {
    var arrowPrev = gliders[i].parentNode.querySelector('.glider-prev');
    var arrowNext = gliders[i].parentNode.querySelector('.glider-next');
    console.log(arrowPrev, arrowNext);

    new Glider(gliders[i], {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: arrowPrev,
        next: arrowNext
      }
    });
  }
})

function menu() {
  var menu = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var menuWrapper = document.querySelector('.wrapper.header');
  menu.addEventListener('click', function(){
    this.classList.toggle('clicked');
    mobileMenu.classList.toggle('clicked');
    menuWrapper.classList.toggle('clicked');
  })
}menu();
