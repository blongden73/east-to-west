function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

window.addEventListener('load', function(){
  var gliders = document.querySelectorAll('.glider');
  console.log(gliders);

  for(i=0; i< gliders.length; i++) {
    var arrowPrev = gliders[i].parentNode.querySelector('.glider-prev');
    var arrowNext = gliders[i].parentNode.querySelector('.glider-next');
    console.log(arrowPrev, arrowNext);

    new Glider(gliders[i], {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: arrowPrev,
        next: arrowNext
      },
      responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3,
        slidesToScroll: 1,
        duration: 0.25
      }
    }
  ]
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
  var hometext = document.querySelector('.home-strap');
  var welcometext = document.querySelector('.welcome-text');
  if(homevideo){
    homevideo.addEventListener("timeupdate", function() {
      console.log('video playing');
     // if the video is loaded and duration is known
     if(!isNaN(this.duration)) {
          var percent_complete = this.currentTime / this.duration * 100;
          console.log(percent_complete);
          console.log(progress);
          progress.style.width = percent_complete + '%';

          //for if we want to do something when the video is playingr
          // if(percent_complete >= 25) {
          //   hometext.classList.add('hide');
          // }else {
          //   hometext.classList.remove('hide');
          // }
          // if(percent_complete >= 35) {
          //   welcometext.classList.add('show');
          // }else {
          //   welcometext.classList.remove('show');
          // }
      }
    });
  }
}video();

function counting(){
  var projectNumber = document.querySelector('#projects');
  if(projectNumber){
    document.addEventListener('scroll', function(){
      if(elementInViewport(projectNumber) && !projectNumber.classList.contains('counted') && !projectNumber.classList.contains('projectPage')){
        setTimeout(function(){
        var countUp = new CountUp('projects', 0, 29);
        countUp.start();
        projectNumber.classList.add('counted');
      }, 100)

        setTimeout(function(){
        var countUpTwo = new CountUp('cities', 0, 19);
        countUpTwo.start();
      }, 200)

        setTimeout(function(){
        var countUpThree = new CountUp('states', 0, 12);
        countUpThree.start();
      }, 300)
      }else if(!elementInViewport(projectNumber)){
        projectNumber.classList.remove('counted');
      }
    });
    if(projectNumber.classList.contains('projectPage')){
      setTimeout(function(){
        var countUp = new CountUp('projects', 0, 29);
        countUp.start();
        projectNumber.classList.add('counted');
      }, 100)

      setTimeout(function(){
        var countUpTwo = new CountUp('cities', 0, 19);
        countUpTwo.start();
      }, 200)

      setTimeout(function(){
        var countUpThree = new CountUp('states', 0, 12);
        countUpThree.start();
      }, 300)
    }
  }
}counting();

function filter(){
  var url = window.location.href;
  if(url.includes('?')) {
    var urlSplit = url.split('?');
    var tidyUrl = urlSplit[1].toLowerCase();
  }
  var selector = '[data-type="' + tidyUrl + '"]';
  var projectsSelected = document.querySelectorAll(selector);
  var allProjects = document.querySelectorAll('.portfolio-card');
  var zeroprojects = document.querySelector('.zero-projects');
  var filters = document.querySelector('.types');
  if (filters) {
    var list = filters.querySelectorAll('li');
    for(g=0; g<list.length; g++){
      list[g].addEventListener('click', function(){
        console.log('click');
        var selected = this.dataset.type;
        var tidyUrl = selected.toLowerCase();
        var selector = '[data-type="' + tidyUrl + '"]';
        var projectsSelected = document.querySelectorAll(selector);
        this.classList.toggle('show');

        for(j=0; j<allProjects.length; j++){
          allProjects[j].classList.add('hide');
        }
        for(i=0; i<projectsSelected.length; i++){
          projectsSelected[i].classList.add('show');
        }
      });
    }
  }
  console.log(projectsSelected);
  if(url.includes('?')) {
    for(j=0; j<allProjects.length; j++){
      allProjects[j].classList.add('hide');
    }
    for(i=0; i<projectsSelected.length; i++){
      projectsSelected[i].classList.add('show');
    }
    console.log('fliter mode', projectsSelected.length);
    if(projectsSelected.length <= 1){
      zeroprojects.classList.add('show');
    }
  }
}filter();

function video(){
  var playButton = document.querySelector('.playButton');
  playButton.addEventListener('click', function(){
    console.log(this.nextSibling.nextElementSibling);
    if(this.nextSibling.nextElementSibling.paused){
      this.nextSibling.nextElementSibling.play();
      this.classList.add('hide');
    }
  });
}video();
