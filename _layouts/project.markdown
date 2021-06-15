---
layout: default
---

<section class="ew-where-we-work">
  <div class="wrapper">
    <div class="flex flip">
      <div class="left">

      </div>
      <div uk-parallax="y: -300" class="right block">
        <div class="flex small">
          <div class="num full">
            <p class="large serif">{{page.title}}</p>
            <p>{{page.content}}</p>
          </div>
        </div>
      </div>
    </div>
    <div uk-parallax="y: -200" class="ew-image full">
      <img src="{{page.['Cover Image']}}">
    </div>
    <div class="ew-texture full">
      <svg width="633" height="506" viewBox="0 0 633 506" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".5" stroke="#fff" stroke-width="2" stroke-dasharray="4 4"><path d="M0 1h633M0 9h633M0 17h633M0 25h633M0 33h633M0 41h633M0 49h633M0 57h633M0 65h633M0 73h633M0 81h633M0 89h633M0 97h633M0 105h633M0 113h633M0 121h633M0 129h633M0 137h633M0 145h633M0 153h633M0 161h633M0 169h633M0 177h633M0 185h633M0 193h633M0 201h633M0 209h633M0 217h633M0 225h633M0 233h633M0 241h633M0 249h633M0 257h633M0 265h633M0 273h633M0 281h633M0 289h633M0 297h633M0 305h633M0 313h633M0 321h633M0 329h633M0 337h633M0 345h633M0 353h633M0 361h633M0 369h633M0 377h633M0 385h633M0 393h633M0 401h633M0 409h633M0 417h633M0 425h633M0 433h633M0 441h633M0 449h633M0 457h633M0 465h633M0 473h633M0 481h633M0 489h633M0 497h633M0 505h633"/></g></svg>
    </div>
  </div>
</section>
{% if page.Video %}
<section class="ew-where-we-work">
  <div class="wrapper">
    <div class="flex">
      <div class="left">

      </div>
      <div uk-parallax="y: -300" class="right block">
        <div class="flex small">
          <div class="num full">
            <p class="large serif">Play</p>
          </div>
        </div>
      </div>
    </div>
    <div uk-parallax="y: -200" class="ew-image full">
      <p class="locator-text"><span uk-icon="icon: location; ratio: 0.8"></span> <a href="{{page.permalink}}">{{page.title}}</a></p>
      <video autoplay muted loop playsinline>
        <source src="{{page.Video}}" type="video/mp4">
      </video>
    </div>
    <div class="ew-texture full">
      <svg width="633" height="506" viewBox="0 0 633 506" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".5" stroke="#fff" stroke-width="2" stroke-dasharray="4 4"><path d="M0 1h633M0 9h633M0 17h633M0 25h633M0 33h633M0 41h633M0 49h633M0 57h633M0 65h633M0 73h633M0 81h633M0 89h633M0 97h633M0 105h633M0 113h633M0 121h633M0 129h633M0 137h633M0 145h633M0 153h633M0 161h633M0 169h633M0 177h633M0 185h633M0 193h633M0 201h633M0 209h633M0 217h633M0 225h633M0 233h633M0 241h633M0 249h633M0 257h633M0 265h633M0 273h633M0 281h633M0 289h633M0 297h633M0 305h633M0 313h633M0 321h633M0 329h633M0 337h633M0 345h633M0 353h633M0 361h633M0 369h633M0 377h633M0 385h633M0 393h633M0 401h633M0 409h633M0 417h633M0 425h633M0 433h633M0 441h633M0 449h633M0 457h633M0 465h633M0 473h633M0 481h633M0 489h633M0 497h633M0 505h633"/></g></svg>
    </div>
  </div>
</section>
{% endif %}
<section class="ew-how">
  <div class="wrapper extra">
    <div class="text-wrapper">
      <p class="large serif">
        {{page.title}}
      </p>
    </div>
  </div>
</section>
<section class="ew-project-images cream">
  <div class="wrapper">
    <div class="flex">
      {% assign projectImages = page.Images %}
      {% for image in projectImages %}
        <div class="portfolio-image-wrapper fifty">
          <img src="{{image.Image}}">
        </div>
      {% endfor %}
    </div>
  </div>
</section>
