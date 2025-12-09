/**
 * Theme Toggle - Light/Dark Mode Switcher
 * Persists preference to localStorage and respects system preference
 */

(function() {
  'use strict';

  const THEME_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // Get the toggle button
  const toggleButton = document.querySelector('.theme-toggle');
  
  if (!toggleButton) return;

  // Function to set theme
  function setTheme(theme) {
    if (theme === DARK) {
      document.documentElement.setAttribute('data-theme', DARK);
      localStorage.setItem(THEME_KEY, DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, LIGHT);
    }
  }

  // Function to get current theme
  function getCurrentTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  // Toggle theme on button click
  toggleButton.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === DARK ? LIGHT : DARK;
    setTheme(newTheme);
    
    // Add a subtle animation feedback
    toggleButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
      toggleButton.style.transform = 'scale(1)';
    }, 150);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? DARK : LIGHT);
    }
  });

})();

