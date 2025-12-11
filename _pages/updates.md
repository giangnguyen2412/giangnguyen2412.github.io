---
title: "All Updates"
layout: single
permalink: /updates/
classes: wide
author_profile: false
---

<style>
.updates-full-section {
  padding: 2rem 0;
}

.updates-full-list {
  max-width: 900px;
  margin: 0 auto;
}

.update-full-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-light);
  transition: all 0.2s ease;
}

.update-full-item:first-child {
  padding-top: 0;
}

.update-full-item:last-child {
  border-bottom: none;
}

.update-full-item:hover {
  background: var(--bg-secondary);
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8px;
}

.update-full-date {
  flex-shrink: 0;
  width: 90px;
  text-align: center;
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
}

.update-full-month {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.update-full-year {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.update-full-content {
  flex: 1;
  text-align: left;
}

.update-full-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.45;
}

.update-full-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.update-full-title a:hover {
  color: var(--accent-primary);
}

.update-full-excerpt {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.update-full-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.update-full-category {
  color: var(--accent-primary);
  background: var(--accent-light);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .update-full-item {
    flex-direction: column;
    gap: 0.75rem;
  }

  .update-full-date {
    width: auto;
    display: inline-flex;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
  }

  .update-full-month, .update-full-year {
    display: inline;
  }
}

.back-to-home {
  text-align: center;
  margin-bottom: 3rem;
}

.back-to-home a {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.back-to-home a:hover {
  color: var(--accent-hover);
  transform: translateX(-2px);
}
</style>

<div class="back-to-home">
  <a href="/">← Back to Home</a>
</div>

<div class="updates-full-section">
  <div class="updates-full-list">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      <article class="update-full-item">
        <div class="update-full-date">
          <span class="update-full-month">{{ post.date | date: "%b" }}</span>
          <span class="update-full-year">{{ post.date | date: "%Y" }}</span>
        </div>
        <div class="update-full-content">
          <h3 class="update-full-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          {% if post.excerpt %}
            <p class="update-full-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
          {% endif %}
          <div class="update-full-meta">
            <span class="update-full-category">{{ post.date | date: "%B %d, %Y" }}</span>
            {% if post.categories.first %}
              <span class="update-full-category">{{ post.categories.first }}</span>
            {% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>

