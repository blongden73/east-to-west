---
layout: default
---

<section class="ew-projects">
  <div class="wrapper">
    <h1 class="mega">Case Studies</h1>
    <div class="zero-projects">! We currently don't have these projects on our site, please email for more details</div>
    <div class="flex portfolio-wrapper">
      {% assign caseStudies = site.case-studies | sort: "position" %}
      {% for case in caseStudies %}
        <div data-type="{{case.Type | slugify}}" class="third portfolio-card">
          <a href="{{case.url}}"></a>
          <div class="project-image-wrapper">
            <img src="{{case.['Cover Image']}}">
            <div class="project-info">
              <h2>{{case.Type}}</h2>
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