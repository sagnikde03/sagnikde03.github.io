---
title: "GLEAM: A Multimodal Deep Learning Framework for Chronic Lower Back Pain Detection Using EEG and sEMG Signals"
collection: publications
category: manuscripts
permalink: /publication/2025-01-02-gleam-lbp-eeg-semg
excerpt: ''
date: 2025-01-02
venue: 'Computers in Biology and Medicine'
paperurl: 'https://doi.org/10.1016/j.compbiomed.2025.109928'
citation: 'S. De, P. Mukherjee, A. H. Roy, "GLEAM: A multimodal deep learning framework for chronic lower back pain detection using EEG and sEMG signals," Computers in Biology and Medicine, Volume 189, 2025, 109928, ISSN 0010-4825'
---

Low Back Pain (LBP) is the most prevalent musculoskeletal condition worldwide and a leading cause of disability, significantly affecting mobility, work productivity, and overall quality of life. Due to its high prevalence and substantial economic burden, LBP presents a critical global public health challenge that demands innovative diagnostic and therapeutic solutions. This study introduces a novel deep-learning approach for diagnosing LBP intensity using electroencephalography (EEG) signals and surface electromyography (sEMG) signals from back muscles. A GAN-Convolution-Transformer-based model, named GLEAM (GAN-ConvoLution-sElf Attention-ETLSTM), is designed to classify LBP intensity into four categories: no LBP, mild LBP, moderate LBP, and intolerable LBP. A denoising GAN is central to the model’s functionality, playing a pivotal role in enhancing the quality of EEG and sEMG signals by removing noise, resulting in cleaner and more accurate input data. Various features are extracted from the GAN-denoised EEG and sEMG signals, and the combined features from both EEG and sEMG are used for LBP detection. After the feature extraction, the CNN is employed to capture local temporal patterns within the data, allowing the model to focus on smaller, region-specific trends in the signals. Subsequently, the self-attention module identifies global correlations among these locally extracted features, enhancing the model’s ability to recognize broader patterns. The proposed ETLSTM network performs the final classification, which achieves an impressive LBP detection accuracy of 98.95%. This research presents several innovative contributions: (i) the development of a novel denoising GAN for cleaning EEG and sEMG signals, (ii) the design and integration of a new ETLSTM architecture as a classifier within the GLEAM model, and (iii) the introduction of the GLEAM hybrid deep learning framework, which enables robust and reliable LBP intensity assessment.

[Download paper here](https://doi.org/10.1016/j.compbiomed.2025.109928)
