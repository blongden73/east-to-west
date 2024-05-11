---
layout: default
---

<section class="ew-projects">
  <div class="wrapper">
    <h1 class="mega">Case Studies</h1>
    <ul class="flex together types">
      {% assign types = site.types | sort:"position" %}
      {% for tag in types %}
      <li data-type="{{tag.title | slugify}}"><h2>{{tag.title}}</h2></li>
      {% endfor %}
    </ul>
    <div class="zero-projects">! We currently don't have these projects on our site, please email for more details</div>
    <div class="flex portfolio-wrapper">
      {% assign caseStudies = site.projects | sort: "position" %}
      {% for case in caseStudies %}
        <div data-type="{{case.Type | slugify}}" class="third portfolio-card">
          <a href="{{case.url}}"></a>
          <div class="project-image-wrapper">
            <img src="{{case.['Cover Image']}}">
            <div class="project-info">
              <h2>{{case.Location}} • {{case.Type}}</h2>
              <p class="large serif">
                {{case.title}}
              </p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>