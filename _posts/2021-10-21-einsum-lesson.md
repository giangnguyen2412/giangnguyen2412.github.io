---
title: "My expensive lesson when using einsum function"
categories: 
    - Research
toc: false
classes: wide
---

At first, I thought these two operations will give the same result, but they do not.

```python3
import torch
a = torch.ones([2,3])
b = torch.ones([1,2])
arr1 = torch.einsum("ab,cd->ad", b, a)
print(arr1)
print(arr1.sum())
arr2 = torch.einsum("ab,bc->ac", b, a)
print(arr2)
print(arr2.sum())
```

And I used ```arr1 = torch.einsum("ab,cd->ad", b, a)``` for matrix multiplication. 

Now three weeks of running experiments may be wasted. This again remind me the System1 in this book and I was completed manipulated my System over the past three weeks :D

But I got very promising results even I did not use the proper matrix multiplication. This suggests that sometimes mistakes can lead us to unexpectectedly surprising results.