---
layout: default
---

<section class="ew-where-we-work">
  <div class="wrapper">
    <div class="flex-case">
        <div class="left">
            <h1 class="white case-headline">{{page.title}}</h1>
            <h2 class="boosted">{{page.Intro}}</h2>
            <h4 class="white">STRATEGY</h4>
            <p class="white">{{page.['Strategy Description']}}</p>
            <h4 class="white">SUCCESS</h4>
            <p class="white">{{page.['Success Description']}}</p>
            <div class="stat">
                {% assign stats = page.Stat | split: '|' %}
                <span class="stat-number">{{stats.[0]}}</span><span class="stat-caption">{{stats.[1]}}</span>
            </div>
        </div>
        <div class="right">
            <img src="{{page.['Cover Image']}}">
        </div>
    </div>
    
  </div>
</section>