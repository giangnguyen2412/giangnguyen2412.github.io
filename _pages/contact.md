---
layout: clean
title: Contact
permalink: /contact/
---

<a class="back" href="/">← Home</a>

<h1>Contact</h1>
<p style="color:#555;margin-bottom:1.5rem;">Send me a message and I'll get back to you.</p>

<form action="https://formspree.io/f/xjgzejep" method="POST" style="max-width:480px;">
  <div style="margin-bottom:1rem;">
    <label for="name" style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.3rem;color:#444;">Name</label>
    <input type="text" id="name" name="name" required
      style="width:100%;padding:0.5rem 0.75rem;border:1px solid #ddd;border-radius:6px;font-size:0.95rem;font-family:inherit;box-sizing:border-box;">
  </div>
  <div style="margin-bottom:1rem;">
    <label for="email" style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.3rem;color:#444;">Email</label>
    <input type="email" id="email" name="email" required
      style="width:100%;padding:0.5rem 0.75rem;border:1px solid #ddd;border-radius:6px;font-size:0.95rem;font-family:inherit;box-sizing:border-box;">
  </div>
  <div style="margin-bottom:1.25rem;">
    <label for="message" style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.3rem;color:#444;">Message</label>
    <textarea id="message" name="message" rows="5" required
      style="width:100%;padding:0.5rem 0.75rem;border:1px solid #ddd;border-radius:6px;font-size:0.95rem;font-family:inherit;resize:vertical;box-sizing:border-box;"></textarea>
  </div>
  <button type="submit"
    style="background:#5a3adc;color:#fff;border:none;padding:0.55rem 1.4rem;border-radius:6px;font-size:0.95rem;font-weight:600;cursor:pointer;font-family:inherit;">
    Send
  </button>
</form>
