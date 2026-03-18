---
layout: page
title: Analyses
permalink: /analyses/
---

Empirical analyses from my Master's thesis on Danish immigration politics and public opinion. Each piece draws on the Danish National Election Study (2011–2022) and the Chapel Hill Expert Survey.

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-card">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-card-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.category %} &mdash; {{ post.category }}{% endif %}</p>
    {% if post.excerpt %}<p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 280 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
