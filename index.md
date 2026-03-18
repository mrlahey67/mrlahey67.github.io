---
layout: default
title: Home
---
<div class="home-intro">

# Victor Marques Fejø

I am a political science researcher completing a Master's thesis at [University name]. My work focuses on Danish electoral politics, party strategy, and public opinion formation. My thesis examines whether elite-level convergence on immigration policy between Socialdemokratiet and Venstre produced corresponding opinion convergence among voters — a test of Zaller's mainstreaming hypothesis using four waves of the Danish National Election Study (2011–2022).

This site collects the empirical analyses from that thesis, written for a general audience. The analyses draw on survey data from approximately 11,470 respondents across four election cycles and use the Chapel Hill Expert Survey to measure party positions over time.

</div>

<div class="home-recent">

## Recent Analyses

<ul class="post-list">
{% for post in site.posts limit:5 %}
  <li class="post-card">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-card-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.category %} &mdash; {{ post.category }}{% endif %}</p>
    {% if post.excerpt %}<p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 220 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>

</div>
