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
            <div class="table">
                {% assign table = page.Table %}
                {% if table.[0]['Sales Price'] %}
                    <span class="tb-rw">Sales Price <span class="tb-rw-info">{{ table.[0]['Sales Price']}}</span></span>
                    <span class="tb-rw">Profit on Cost <span class="tb-rw-info">{{ table.[1]['Profit on Cost'] }}</span></span>
                    <span class="tb-rw">Equity Invested' <span class="tb-rw-info">{{ table.[2]['Equity Invested'] }}</span></span>
                    <span class="tb-rw">Total Return <span class="tb-rw-info">{{ table.[3]['Total Return'] }}</span></span>
                    <span class="tb-rw">Profit on Equity $ <span class="tb-rw-info">{{ table.[4]['Profit on Equity $'] }}</span></span>
                    <span class="tb-rw">Profit on Equity % <span class="tb-rw-info">{{ table.[5]['Profit on Equity %'] }}</span></span>
                    <span class="tb-rw">Dates Funded & Sold <span class="tb-rw-info">{{ table.[6]['Dates Funded & Sold'] }}</span></span>
                    <span class="tb-rw">Months Duration <span class="tb-rw-info">{{ table.[7]['Months Duration'] }}</span></span>
                {% endif %}
            </div>
        </div>
        <div class="right">
            <img src="{{page.['Cover Image']}}">
        </div>
    </div>
    
  </div>
</section>