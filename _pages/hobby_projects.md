---
title: Projects
layout: single
permalink: /hobby_projects/
classes: wide
author_profile: true
---

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.project-card:hover {
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.project-icon {
  width: 48px;
  height: 48px;
  background: var(--accent-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.project-icon i {
  font-size: 1.5rem;
  color: var(--accent-primary);
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.project-title a {
  color: inherit;
  text-decoration: none;
}

.project-title a:hover {
  color: var(--accent-primary);
}

.project-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.35rem 0.75rem;
  background: var(--bg-secondary);
  border-radius: 6px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.project-link:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  background: var(--accent-light);
}
</style>

A collection of side projects and contributions beyond my main research work.

<div class="project-grid">

<div class="project-card">
  <div class="project-icon">
    <i class="fas fa-book"></i>
  </div>
  <h3 class="project-title">
    <a href="https://github.com/giangnguyen2412/InterpretableMLBook-Vietnamese" target="_blank">
      Interpretable ML Book Translation
    </a>
  </h3>
  <p class="project-description">
    Vietnamese translation of "Interpretable Machine Learning: A Guide for Making Black Box Models Explainable" by Christoph Molnar. A hobby project completed during my Master's at KAIST.
  </p>
  <div class="project-links">
    <a href="https://github.com/giangnguyen2412/InterpretableMLBook-Vietnamese" class="project-link" target="_blank">
      <i class="fab fa-github"></i> Repository
    </a>
    <a href="https://twitter.com/ChristophMolnar/status/1366383437645574145" class="project-link" target="_blank">
      <i class="fab fa-twitter"></i> Author's Tweet
    </a>
  </div>
</div>

</div>
