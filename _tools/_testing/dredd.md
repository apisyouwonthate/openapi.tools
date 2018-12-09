---
layout: default # You can ommit this if you've set it as a default
title: Dredd
---

<article class="animal">

  {% if page.picture %}
    <img src="{{ page.picture }}" alt="Photo of a {{ page.title | downcase }}">
  {% endif %}

  <h1>Animal Profile: {{ page.title }}</h1>

  <div class="animal-class {{ page.class | downcase }}">
    {{ page.class }}
  </div>

  <div class="animal-family {{ page.family | downcase }}">
    {{ page.family }}
  </div>

  <div>
    {{ content }}
  </div>
  
</article>
