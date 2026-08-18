---
title: "A Novel Vision Transformer based Multimodal Fusion Approach for Clinical MDD Diagnosis Using EEG and Audio Signals"
collection: publications
category: manuscripts
permalink: /publication/2025-01-01-vit-mdd-eeg-audio
excerpt: 'A Vision Transformer-based multimodal fusion framework combining EEG and audio signals for clinical diagnosis of Major Depressive Disorder, achieving 98.86% accuracy on the MODMA dataset.'
date: 2025-01-01
venue: 'IEEE Transactions on Computational Biology and Bioinformatics'
paperurl: 'https://ieeexplore.ieee.org/document/11218801'
citation: 'De, S., Singh, A., & Bhandari, A. K. (2025). "A Novel Vision Transformer based Multimodal Fusion Approach for Clinical MDD Diagnosis Using EEG and Audio Signals." <i>IEEE Transactions on Computational Biology and Bioinformatics</i>.'
---

Major Depressive Disorder (MDD) is a debilitating mental health condition characterized by persistent sadness, anhedonia, and cognitive impairments that significantly disrupt daily functioning. Accurate diagnosis remains difficult due to the subjective nature of clinical assessments, highlighting the need for objective and automated diagnostic tools.

This study proposes a novel multimodal framework integrating electroencephalography (EEG) and audio signals for accurate MDD detection. EEG signals undergo preprocessing and are transformed into 2D time-frequency (T-F) representations using the Superlet Transform, while audio signals are converted into Mel-spectrograms. The 2D representations from each modality are independently fed into a novel Vision Transformer (ViT) architecture. The proposed ViT first slices the T-F representation along frequency bands and applies positional encoding to each slice. The resulting slice embeddings are subsequently processed through a parallel Transformer Encoder (PE) module to effectively capture temporal dependencies. After the PE module has extracted sufficient information from the embedded slices, a learnable class token is appended to them, and the combined representation is passed through the Class Encoder (CE) module, allowing the model to capture global contextual information. Features extracted independently from EEG and audio streams are then fused and fed into a fully connected layer for final classification.

Evaluation on the MODMA clinical dataset shows the framework achieves 98.86% accuracy, 98.32% F1-score, and 0.9403 MCC, surpassing unimodal baselines. The lightweight feature extraction and transformer-based fusion mechanisms enable the proposed architecture deployable in an edge–fog–cloud Internet of Medical Things (IoMT) system, resulting in low-latency, resource-efficient, and scalable remote diagnosis, enhancing accessibility and real-time clinical decision-making.

[Download paper here](https://ieeexplore.ieee.org/document/11218801)
