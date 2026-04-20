---
layout: page
title: Analyses
permalink: /analyses/
---

<div class="lang-en" markdown="1">

Empirical analyses from a structured thesis workshop on Danish electoral politics. The pieces draw on survey data, expert party ratings, polling-station records, and parish-level socioeconomic data to examine how Danish voters form opinions, switch parties, and respond to elite signals — at both the national and municipal level.

</div>

<div class="lang-da" markdown="1">

Empiriske analyser fra et struktureret speciale-workshop om dansk valgpolitik. Analyserne trækker på surveydata, ekspertvurderinger af partipositioner, afstemningsstedsdata og sogneniveau-socioøkonomiske data for at undersøge, hvordan danske vælgere danner holdninger, skifter parti og reagerer på elite-signaler — på både nationalt og kommunalt niveau.

</div>

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-card">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-card-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.category %} &mdash; {{ post.category }}{% endif %}</p>
    {% if post.excerpt %}<p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 280 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
