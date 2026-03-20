---
layout: default
title: Home
---
<div class="home-intro">

# Victor Marques Fejø

Jeg er en statskundskabsstuderende fra Københavns Universitet, som snart skal til at skrive speciale. Denne side er en samling af analyser jeg har lavet både ifm. gamle opgaver, men også som del af en ide-workshop, hvor jeg har lavet nogle research designs til mit kommende speciale. Alle analyser er lavet med offentligt tilgængelige data fra: Den Danske Valgundersøgelse, Chapel Hill Expert Survey, Den Danske Valgdatabase, Arbejderbevægelsens Erhvervsråd, Kommunernes Landsforening og Danmarks Statistik.

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
