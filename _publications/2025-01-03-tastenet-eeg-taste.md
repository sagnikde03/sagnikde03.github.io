---
title: "TasteNet: A Novel Deep Learning Approach for EEG-Based Basic Taste Perception Recognition Using CEEMDAN Domain Entropy Features"
collection: publications
category: manuscripts
permalink: /publication/2025-01-03-tastenet-eeg-taste
excerpt: 'TasteNet is a CNN/multi-head-attention/Att-BiPLSTM framework that classifies six basic taste perceptions from EEG signals using CEEMDAN-domain entropy features, achieving 97.52% accuracy.'
date: 2025-01-03
venue: 'Journal of Neuroscience Methods'
paperurl: 'https://doi.org/10.1016/j.jneumeth.2025.110463'
citation: 'De, S., Mukherjee, P., & Halder Roy, A. (2025). "TasteNet: A Novel Deep Learning Approach for EEG-Based Basic Taste Perception Recognition Using CEEMDAN Domain Entropy Features." <i>Journal of Neuroscience Methods</i>.'
---

Taste perception is the process by which the gustatory system detects and interprets chemical stimuli from food and beverages, involving activation of taste receptors on the tongue. Analyzing taste perception is essential for understanding human sensory responses and diagnosing taste-related disorders. This research focuses on developing a deep learning framework to effectively recognize basic taste stimuli from EEG signals.

Initially, the recorded EEG signals undergo preprocessing to remove noise and artifacts. The CEEMDAN (complete ensemble empirical mode decomposition with adaptive noise) method is then applied to decompose the EEG signals into various frequency rhythms, referred to as intrinsic mode functions (IMFs). From the chosen IMFs, six distinct entropy features — sample, bubble, approximate, dispersion, slope, and permutation entropy — are extracted for further analysis.

A novel deep learning model, TasteNet, is then developed, integrating a convolutional neural network (CNN) module, a multi-head attention module, and the Att-BiPLSTM (Attention-Bidirectional Potent Long Short-Term Memory) network. The proposed architecture classifies the input data into six categories: no taste, sweet, sour, bitter, umami, and salty, achieving a remarkable accuracy of 97.52 ± 0.48%. TasteNet outperforms existing taste perception classification methods, as demonstrated through extensive experiments, with CEEMDAN-based signal decomposition, key entropy features, and the multi-head attention plus Att-BiPLSTM combination together enhancing the model's ability to identify various taste sensations accurately.

[Download paper here](https://doi.org/10.1016/j.jneumeth.2025.110463)
