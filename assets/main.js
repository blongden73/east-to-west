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


function video() {
  var homevideo = document.querySelector('.main-video');
  var progress = document.querySelector('.location-inner');
  homevideo.addEventListener("timeupdate", function() {
    console.log('video playing');
   // if the video is loaded and duration is known
   if(!isNaN(this.duration)) {
        var percent_complete = this.currentTime / this.duration * 100;
        console.log(percent_complete);
        console.log(progress);
        progress.style.width = percent_complete + '%';
    }
});
}video();
