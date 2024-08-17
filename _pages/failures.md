---
title: Lessons
layout: single
permalink: /lessons/
classes: wide
---

Welcome to the "**Lessons**" page—a candid exploration of the hurdles and setbacks as well as the triumphs that have shaped my journey. 
Here, I document not just the events that didn’t go as planned, but also the successes and the invaluable lessons these experiences have taught me.

Read them with me, not with a focus on disappointment or self-congratulation, but with an appreciation for the profound insights gained through adversity and achievement.

<script>
function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}
</script>

## Looking for a Research Internship for Summer 2024

### Failure #1: Sony AI
<button onclick="toggleVisibility('failure1')">Read Story</button>
<div id="failure1" style="display:none;">
<strong>Story:</strong> Sony AI reached out to me for an internship opportunity. I was excited to work with them because I saw they were doing some AI fairness work and I think
my expertise in Explainable AI could be useful.
After going through 3-4 rounds of interviews, they were just silent for months, although I think
I did great in the interviews. I reached out to them multiple times, but they never responded.
Bummer! Finally, the guy who was my contact at Sony AI reached out to me after 5 months and said they
changed the research topic.
</div>

[//]: # (### Failure #2: Research Internship at Apple)

[//]: # ()
[//]: # (### Failure #3: Research Internship at Microsoft)

[//]: # ()
[//]: # (### Failure #4: Genentech/Prescient Design Internship)

### Success #1: Research Internship at Megagon Labs (Declined)
<button onclick="toggleVisibility('success1')">Read Story</button>
<div id="success1" style="display:none;">
<strong>Story:</strong> I do love the vibe at Megagon Labs. I had a great time interviewing with them, and I was
deeply impressed by the work they are doing and the vibe of the team. The two who interviewed me
were super nice and I have no doubt that I would have had a great time working with them.
However, I had to decline the offer because I had already accepted an offer from JP Morgan Chase.
</div>

### Success #2: Research Internship at JP Morgan Chase (Accepted)
<button onclick="toggleVisibility('success2')">Read Story</button>
<div id="success2" style="display:none;">
<strong>Story:</strong> Who does not want to work on some cool AI stuffs for the biggest financial firm in the world?
I just felt like the attraction from JP Morgan Chase was too strong to resist.
Plus, I think the compensation here is incomparable to any other internship I have seen so far.
</div>

[//]: # (## Paper Submissions)

[//]: # ()
[//]: # (### Failure #1: Paper rejected at AAAI 2024)

[//]: # ()
[//]: # (### Failure #2: Paper withdrawn from ICML 2024)

## Doing research and growing

### [TMLR2024](https://openreview.net/pdf?id=OcFjqiJ98b): A roller-coaster journey

<button onclick="toggleVisibility('research2')">Read Story</button>
<div id="research2" style="display:none;">
Everything starts from CVPR 2022.

We wrote a [paper](https://openreview.net/pdf?id=UavQ9HYye6n) where we conduct a human study to investigate the effectiveness of nearest-neighbor explanations for image classification.
I wonder, given the human data, can I train a model that can capture the human notion of evaluation and automate the process of evaluating XAI methods?
Back then and even thus far, evaluating XAI methods has been the holy grail of Artificial Intelligence (AI).
I was even further inspired by the [work](https://openreview.net/pdf?id=48Js-sP8wnv) from [Valerie](https://valeriechen.github.io/) (CMU) where she tried to automate the process of evaluating XAI methods using SimEvals agents.
Then, I reached out to Valerie, and we started working on this project together, for 2 years, from 2022 to 2024.

Yet, building a SimEvals agent in vision tasks is non-trivial. In the beginning, we tried to let a deep learning model learn to perform the [decision-making task](https://proceedings.neurips.cc/paper/2021/file/de043a5e421240eb846da8effe472ff1-Paper.pdf) 
using attribution maps or nearest-neighbors, none of them worked.

Actually, the key is the data and how we perform data augmentation.
We recognized that the data we collected from the human study was not enough to train a model that can capture the human notion of evaluation.
The key that makes our model work is the data augmentation technique we used (e.g. positive & negative sample curation).

At the end of the day, we have a model that can perform the decision-making task with very high accuracy, at more than 90%.
Remember that the best in literature so far is ~70% reported in [visual-corr paper](https://openreview.net/pdf?id=UavQ9HYye6n).

But we did not stop. Actually, in the beginning, I invented the term "AdvisingNet" to refer to our model because our model is giving advice on the "correctness" of another AI model.
Yet, finally, as we specifically use nearest neighbor and image comparison to do the task, we decided to go for "image comparator" - a much less fancy name :D 

But the fun part is in the middle of the project.
We were stuck to make the model work. We tried many things, but none of them worked. A few times, my PhD advisor asked me to skill the project 💀💀💀.

I was pretty down at that time. But deep inside, I know it is now or never.
If I quit, I can never be a senior PhD student and giving up is not my thing, ever.

I think at the same time, my PhD advisor challenged me and also motivated me.
There is nothing clearly wrong or right, but the thing is we keep going and overcome the hurdles.

After the paper being accepted, I feel like I have grown a lot, in mindset. I am confident to work independently and drive the project to success.

In conclusion, I think the key to success is to keep going, no matter what.

</div>