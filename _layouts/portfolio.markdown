---
layout: default
---

<section class="ew-where-we-work">
  <div class="wrapper">
    <div class="flex">
      <div class="left">
      </div>
      <div uk-parallax="y: -300" class="right block">
        <div class="flex">
          <div class="num">
            <h1 id="projects">0</h1>
            <p class="large serif">Projects</p>
          </div>
          <div class="num">
            <h1 id="cities">0</h1>
            <p class="large serif">Cities</p>
          </div>
          <div class="num">
            <h1 id="states">0</h1>
            <p class="large serif">US States</p>
          </div>
        </div>
      </div>
    </div>
    <div uk-parallax="y: -200" class="ew-image full">
      <iframe src="https://www.atlistmaps.com/map/9ae06152-1f08-42a4-9d1d-f6f8a03434c7?share=true" allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
    <div class="ew-texture full portfolio">
      <svg width="633" height="506" viewBox="0 0 633 506" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".5" stroke="#fff" stroke-width="2" stroke-dasharray="4 4"><path d="M0 1h633M0 9h633M0 17h633M0 25h633M0 33h633M0 41h633M0 49h633M0 57h633M0 65h633M0 73h633M0 81h633M0 89h633M0 97h633M0 105h633M0 113h633M0 121h633M0 129h633M0 137h633M0 145h633M0 153h633M0 161h633M0 169h633M0 177h633M0 185h633M0 193h633M0 201h633M0 209h633M0 217h633M0 225h633M0 233h633M0 241h633M0 249h633M0 257h633M0 265h633M0 273h633M0 281h633M0 289h633M0 297h633M0 305h633M0 313h633M0 321h633M0 329h633M0 337h633M0 345h633M0 353h633M0 361h633M0 369h633M0 377h633M0 385h633M0 393h633M0 401h633M0 409h633M0 417h633M0 425h633M0 433h633M0 441h633M0 449h633M0 457h633M0 465h633M0 473h633M0 481h633M0 489h633M0 497h633M0 505h633"/></g></svg>
    </div>
  </div>
</section>
<section class="ew-projects">
  <div class="wrapper">
    <h1 class="mega">Our Projects</h1>
    <ul class="flex together types">
      {% for tag in site.types %}
      <li data-type="{{tag.title | slugify}}"><h2>{{tag.title}}</h2></li>
      {% endfor %}
    </ul>
    <div class="zero-projects">! We currently don't have these projects on our site, please email for more details</div>
    <div class="flex portfolio-wrapper">
      {% assign projects = site.projects %}
      {% for project in projects %}
        <div data-type="{{project.Type | slugify}}" class="third portfolio-card">
          <a href="{{project.url}}"></a>
          <div class="project-image-wrapper">
            <img src="{{project.['Cover Image']}}">
            <div class="project-info">
              <h2>{{project.Location}} • {{project.Type}}</h2>
              <p class="large serif">
                {{project.title}}
              </p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
