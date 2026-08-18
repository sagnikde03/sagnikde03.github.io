---
title: "Maestro: A Robust Multi-Head Attention Enhanced CNN Architecture for Heat-Induced Stress Recognition Using EEG Signals"
collection: publications
category: conferences
permalink: /publication/2024-01-02-maestro-heat-stress-eeg
excerpt: 'MAESTRO combines convolutional and multi-head attention blocks to classify heat-induced stress from EEG into Acute, Chronic, and Control categories with 98.88% accuracy.'
date: 2024-01-02
venue: 'IEEE CSITSS 2024'
paperurl: 'https://doi.org/10.1109/CSITSS64042.2024.10816769'
citation: 'De, S., Pavuluri, S., Sayyad, A., & Gupta, A. K. (2024). "Maestro: A Robust Multi-Head Attention Enhanced CNN Architecture for Heat-Induced Stress Recognition Using EEG Signals." <i>IEEE CSITSS</i>.'
---

Heat-induced stress impacts various physiological parameters in the body. Elevated temperature can cause tachycardia, as the body attempts to dissipate heat through vasodilation, leading to dehydration and electrolyte imbalances. Prolonged exposure to high temperatures can cause heat stroke, heat exhaustion, and other ailments including organ damage and systemic dysfunction. Existing EEG-based heat-induced stress detection often considers the entire EEG frequency range (delta to gamma), concealing redundant and lossy information and increasing the likelihood of false detection rates.

To address the limitations of conventional handcrafted feature engineering approaches in heat stress detection, this paper introduces MAESTRO, a novel model comprising two blocks: Convolutional and Multi-head Attention. The Convolutional block extracts precise information from individual EEG frequency bands, while the Multi-head Attention block enhances feature representation through the attention mechanism. Two dense layers then classify heat stress into three classes: Acute, Chronic, and Control.

The proposed framework is validated using EEG data obtained from 40 rodents in a simulated laboratory environment, achieving remarkable overall accuracy, precision, recall, and F1 score of 98.88%, 98.54%, 98.67%, and 98.60% respectively.

[Download paper here](https://doi.org/10.1109/CSITSS64042.2024.10816769)
