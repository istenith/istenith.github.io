---
title: "Challenges and Oppurtunities in Intelligent Hardware"
date: "2022-06-18"
featuredImage: "cover.jpeg"
author: "Vansh"
email: "20bee028@nith.ac.in"
tags: ["Hardware", "IoT", "AI", "embedded systems"]
---

![Cover Image](./cover.jpeg)

More data has been created in the past two years than the entire history of the human race.
This is primarily boosted by the explosion in the sensing and conditioning market **(around (10 billion sensors per year in 2013, expected to reach 1 trillion by 2020)** and connected devices **(6.4 billion in 2016, approximately 20.8 billion by 2020).** These sensors and devices generate hundreds of zetabytes of data per year — petabytes per second.Machine learning is needed to extract meaningful, and ideally actionable, information from this data. A significant amount of computation is required to analyze this data, which often happens in the cloud.
However, given the sheer volume and rate at which data is being generated, and the high energy cost of communication and often limited bandwidth, there is an increasing need to perform the analysis locally near the sensor rather than sending the raw data to the cloud. Embedding machine learning at the edge also addresses important concerns related to privacy, latency and security. Where do we see the most acute analysis of data?

## **A. Computer Vision**

Video is arguably the biggest of the big data. It accounts for over ** 70% ** of today’s Internet traffic . For instance, over 800 million hours of video is collected daily worldwide for video surveillance [6]. In many applications (e.g., measuring wait times in stores, traffic patterns), it would be desirable to use computer vision to extract the meaningful information from the video right at the image sensor rather than in the cloud to reduce the communication cost. For other applications such as autonomous vehicles, drone navigation and robotics, local processing is desired since the latency and security risk of relying on the cloud are too high. However, video involves a large amount of data, which is computationally complex to process; thus, low cost hardware to analyze video is challenging yet critical to enabling these applications. In computer vision, there are many different artificial intelligence (AI) tasks .
[![](https://miro.medium.com/max/1200/1*Mn8VKKEW-3rv6opELKZl8A.jpeg)](https://miro.medium.com/max/1200/1*Mn8VKKEW-3rv6opELKZl8A.jpeg)

## **B. Speech Recognition**

Speech recognition has significantly improved our ability to interact with electronic devices, such as smartphones. While currently most of the processing for applications such as Apple Siri and Amazon Alexa voice services is in the cloud, it is desirable to perform the recognition on the device itself to reduce latency and dependence on connectivity, and to increase privacy. Speech recognition is the first step before many other AI tasks such as machine translation, natural language processing, etc.
![](https://miro.medium.com/max/1400/0*dNTIx78ATaFN-mn-.jpeg)

## **C. Medical**

There is a strong clinical need to be able to monitor patients and to collect long-term data to help either detect/diagnose various diseases or monitor treatment. For instance, constant monitoring of ECG or EEG signals would be helpful in identifying cardiovascular diseases or detecting the onset of a seizure for epilepsy patients, respectively.
![](https://miro.medium.com/max/1024/0*ahrWazH5xmkMGDK2.jpg)

# **The Challenges**

The key metrics for embedded machine learning are accuracy, energy consumption, throughput/latency, and cost. The accuracy of the machine learning algorithm should be measured on a sufficiently large dataset. Programmability is important since the weights need to be updated when the environment or application changes. In the case of deep neural networks, the processor must also be able to support different networks with varying number of layers, filters, channels and filter sizes.
The high dimensionality and need for programmability both result in an increase in computation and data movement. Higher dimensionality increases the amount of data generated and programmability means that the weights also need to be read and stored. This poses a challenge for energy-efficiency since data movement costs more than computation.

[![](https://i.imgur.com/y7ibZvv.png)](https://imgur.com/a/e0qSTX8)

### How do we go around managing such challenges?

One would be to employ highly parallel, superscalar and temporal architectures in both CPU and GPU formats for vector and scalar computation. Matrix calculations, for example, can be sped up even further, by employing certain transforms, like the Fast Fourier Transforms.

On the other hand, AI Accelerators use spatial architecture by minimizing constant data transfers from higher level memory, as such exchanges are often expensive.
The figure above uses a spatial architecture with local memory (register file,in dark blue) at each ALU processing element (PE) on the order of 0.5 – 1.0kB and a shared memory (global buffer) on the order of 100 – 500kB. The global buffer communicates with the off-chip memory (e.g., DRAM). Data movement is allowed between the PEs using an on-chip network (NoC) to reduce access to the global buffer and the off-chip memory. Three types of data movement include input pixels, filter weights and partial sums (i.e., the product of pixels and weights) that are accumulated for the output.

While hardware optimization is in progress, work has begun on optimizing machine learning algorithms as well.The default size for programmable platforms such as CPUs and GPUs is often 32 or 64 bits with floating-point representation. While this remains the case for training, during inference, it is possible to use a fixed-point representation and substantially reduce the bit width for energy and area savings, and increase in throughput. Pruning data during extraction can reduce movement costs as well
