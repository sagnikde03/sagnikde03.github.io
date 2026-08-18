---
title: "GLEAM: A Multimodal Deep Learning Framework for Chronic Lower Back Pain Detection Using EEG and sEMG Signals"
collection: publications
category: manuscripts
permalink: /publication/2025-01-02-gleam-lbp-eeg-semg
excerpt: 'GLEAM (GAN-ConvoLution-sElf Attention-ETLSTM) is a hybrid deep learning framework that classifies chronic lower back pain intensity from EEG and sEMG signals with 98.95% accuracy.'
date: 2025-01-02
venue: 'Computers in Biology and Medicine'
paperurl: 'https://doi.org/10.1016/j.compbiomed.2025.109928'
citation: 'De, S., Mukherjee, P., & Halder Roy, A. (2025). "GLEAM: A Multimodal Deep Learning Framework for Chronic Lower Back Pain Detection Using EEG and sEMG Signals." <i>Computers in Biology and Medicine</i>.'
---

Low Back Pain (LBP) is the most prevalent musculoskeletal condition worldwide and a leading cause of disability, significantly affecting mobility, work productivity, and overall quality of life. Due to its high prevalence and substantial economic burden, LBP presents a critical global public health challenge that demands innovative diagnostic and therapeutic solutions.

This study introduces a novel deep-learning approach for diagnosing LBP intensity using electroencephalography (EEG) signals and surface electromyography (sEMG) signals from back muscles. A GAN-Convolution-Transformer-based model, named GLEAM (GAN-ConvoLution-sElf Attention-ETLSTM), is designed to classify LBP intensity into four categories: no LBP, mild LBP, moderate LBP, and intolerable LBP. A denoising GAN is central to the model's functionality, playing a pivotal role in enhancing the quality of EEG and sEMG signals by removing noise, resulting in cleaner and more accurate input data.

Various features are extracted from the GAN-denoised EEG and sEMG signals, and the combined features from both EEG and sEMG are used for LBP detection. After feature extraction, a CNN captures local temporal patterns within the data, allowing the model to focus on smaller, region-specific trends in the signals. Subsequently, a self-attention module identifies global correlations among these locally extracted features, enhancing the model's ability to recognize broader patterns. The proposed ETLSTM network performs the final classification, achieving an LBP detection accuracy of 98.95%.

This research's key contributions include a novel denoising GAN for cleaning EEG and sEMG signals, a new ETLSTM classifier architecture within GLEAM, and the introduction of the GLEAM hybrid deep learning framework itself, which enables robust and reliable LBP intensity assessment.

[Download paper here](https://doi.org/10.1016/j.compbiomed.2025.109928)
