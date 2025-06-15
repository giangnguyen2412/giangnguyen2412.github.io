---
title: "🎉 TMLR2024 & ICLR2025 - Probable-class nearest neighbor explanations"
categories: 
    - Research
toc: false
classes: wide
---

Our work [**Interpretable LLM-based Table Question Answering**](https://openreview.net/forum?id=2eTsZBoU2W) got accepted at [Transactions on Machine Learning Research](https://jmlr.org/tmlr/).

## What’s inside?
Plan-of-SQLs (POS) — a simple but powerful idea: we break a table-question into transparent atomic steps, each rendered as an executable SQL query.
This yields a system that is:

- Trustworthy: human-readable, step-by-step rationales instead of opaque “LLM magic.”

- Accurate & efficient: on TabFact, WikiTQ, and FeTaQA we match SOTA accuracy while cutting LLM calls and DB queries by up to 25× and staying robust on very large tables.

- Actionable explanations: Our new explanations help users understand model decisions and identify errors.

## Why it matters?
Table QA is everywhere in finance, healthcare, and other high-stakes settings where “because the model said so” simply doesn’t fly. 
POS bridges the gap between the strength of LLMs and the accountability demanded by real-world analysts.

## Notes
Huge thanks to my incredible co-authors, the TMLR action editor & reviewers, and everyone who offered feedback along the way. 
Your insights made this work far better than when it started (August 2024).

This project began from the idea of grounding the LLM answers back to the input tables during my 2024 Summer internship at J.P. Morgan.

Onward! 📊🤖💡