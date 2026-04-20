---
layout: default
title: Home
---
<div class="home-intro">

# Victor Marques Fejø

<div class="lang-en">

I am a political science student at the University of Copenhagen, finishing a Master's degree and preparing to write my thesis. This site collects empirical analyses produced as part of a structured thesis workshop — working through 8–12 quantitative research designs across Danish electoral politics before committing to a final topic. The analyses cover voter opinion formation, immigration attitudes, welfare chauvinism, bloc switching, local incumbency, and geographic electoral polarization. All analyses use publicly available data from the Danish National Election Study, Chapel Hill Expert Survey, Danish Election Database, Arbejderbevægelsens Erhvervsråd, Kommunernes Landsforening, and Danmarks Statistik.

</div>

<div class="lang-da">

Jeg er en statskundskabsstuderende fra Københavns Universitet, som snart skal til at skrive speciale. Denne side er en samling af analyser jeg har lavet både ifm. gamle opgaver, men også som del af en ide-workshop, hvor jeg har lavet nogle research designs til mit kommende speciale. Analyserne dækker meningsdannelse, indvandringsholdninger, velfærdschauvinisme, blokskift, kommunal incumbency og geografisk valgpolarisering. Alle analyser er lavet med offentligt tilgængeligt data fra: Den Danske Valgundersøgelse, Chapel Hill Expert Survey, Den Danske Valgdatabase, Arbejderbevægelsens Erhvervsråd, Kommunernes Landsforening og Danmarks Statistik.

</div>

</div>

<div class="home-recent">

## <span class="lang-en">Recent Analyses</span><span class="lang-da">Seneste Analyser</span>

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
