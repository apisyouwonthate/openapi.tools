---
layout: page
title: Reviews
---
{% for review in site.reviews %}
  <div class="review">
    <h2>{{ review.title }}</h2>
    {{ review.review }}
  </div>
{% endfor %}

