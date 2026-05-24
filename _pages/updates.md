---
layout: clean
title: Updates
permalink: /updates/
---

<a class="back" href="/">← Home</a>

<h1>Updates</h1>

<div style="margin-top:1.5rem;">
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
<div class="entry" style="margin-bottom:1rem;">
  <span class="entry-period">{{ post.date | date: "%b %Y" }}</span>
  <div class="entry-body">
    <a href="{{ post.url | relative_url }}" style="font-weight:600;color:#111;">{{ post.title }}</a>
    {% if post.excerpt %}
      <div class="entry-detail">{{ post.excerpt | strip_html | truncate: 160 }}</div>
    {% endif %}
  </div>
</div>
{% endfor %}
</div>

<hr>

<p class="page-footer">© {{ site.time | date: '%Y' }} Giang Nguyen · <a href="/" style="color:#ccc;">Home</a></p>
