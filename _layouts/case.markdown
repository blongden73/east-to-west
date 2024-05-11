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
                {% if table.['Sales Price'] %}
                    <span class="tb-rw">Sales Price {{ table.['Sales Price'] }}</span>
                    <span class="tb-rw">Profit on Cost {{ table.['Profit on Cost'] }}</span>
                    <span class="tb-rw">Equity Invested' {{ table.['Equity Invested'] }}</span>
                    <span class="tb-rw">Total Return {{ table.['Total Return'] }}</span>
                    <span class="tb-rw">Profit on Equity $ {{ table.['Profit on Equity $'] }}</span>
                    <span class="tb-rw">Profit on Equity % {{ table.['Profit on Equity %'] }}</span>
                    <span class="tb-rw">Dates Funded & Sold {{ table.['Dates Funded & Sold'] }}</span>
                    <span class="tb-rw">Months Duration {{ table.['Months Duration'] }}</span>
                {% endif %}
            </div>
        </div>
        <div class="right">
            <img src="{{page.['Cover Image']}}">
        </div>
    </div>
    
  </div>
</section>