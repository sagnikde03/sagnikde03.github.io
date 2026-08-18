---
title: "SLiTRANet: An EEG-Based Automated Diagnosis Framework for Major Depressive Disorder Monitoring Using a Novel LGCN and Transformer-Based Hybrid Deep Learning Approach"
collection: publications
category: manuscripts
permalink: /publication/2024-01-01-slitranet-mdd-eeg
excerpt: 'SLiTRANet blends S-transform spectral analysis, a Linear Graph Convolution Network, and a Transformer to diagnose Major Depressive Disorder from EEG, reaching up to 99.92% accuracy.'
date: 2024-01-01
venue: 'IEEE Access'
paperurl: 'https://doi.org/10.1109/ACCESS.2024.3493140'
citation: 'De, S., Singh, A., Tiwari, V., Patel, H., Vivekananda, G. N., & Rajput, D. S. (2024). "SLiTRANet: An EEG-Based Automated Diagnosis Framework for Major Depressive Disorder Monitoring Using a Novel LGCN and Transformer-Based Hybrid Deep Learning Approach." <i>IEEE Access</i>.'
---

Major depressive disorder (MDD) is a mental ailment marked by a loss of interest in activities, persistent depression, and hopelessness. MDD has been on the rise in society in recent decades for varied reasons and has spurred suicidal tendencies among individuals. Early detection, continuous monitoring, and effective treatment are crucial for its impact on quality of life and society. EEG signal models the brain's electrical activities and has emerged as a potential tool to assess the depression status of a person.

This work proposes an EEG-headset-based smart monitoring system for real-time diagnosis of MDD in the Internet of Medical Things (IoMT) framework. A novel Linear Graph Convolution Network-Transformer-based deep learning approach is proposed for categorizing MDD through a time-frequency analysis of EEG signals. The Stockwell transform (S-transform) is employed to exploit spectro-temporal information from the EEG, and the resulting 2D representation is fed into a customized Linear Graph Convolution Network for MDD detection. A Weighted Focal Binary Hinge Loss function, specifically designed for the customized Linear Graph Convolution Network, is used to improve learning and handle unbalanced input. A novel Transformer model then refines the MDD classification further.

The proposed methodology, named SLiTRANet, blends spectral analysis with the S-transform, graph-based learning with the Linear Graph Convolution Network, and the sequence modeling capability of the Transformer. It can be further integrated within an IoMT framework for automated real-time MDD diagnosis using EEG signals. Evaluated on two publicly available datasets, MODMA and HUSM, the framework achieves accuracy, sensitivity, specificity, and precision rates of 99.92%, 99.90%, 99.95%, and 99.97% respectively on HUSM, with an equally strong 99.68% accuracy on MODMA — outperforming existing pre-trained and hybrid deep learning models on both datasets.

[Download paper here](https://doi.org/10.1109/ACCESS.2024.3493140)
