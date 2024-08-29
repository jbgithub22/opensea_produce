# OpenSEA Kafka Producer
## About
This project connects to the OpenSEA stream (non-REST) API to steam NFT transaction data to a kafka topic.

## Flowchart
![Data Pipeline Flowchart](images/Flowchart%20v2.png)
[Click for larger image](https://drive.google.com/file/d/1s4PG76NtN370vjhz5pfoGAafAnnlaKT3/view?usp=sharing)

## Components
1. OpenSEA Kafka Producer (Node.js) [This repo]
2. [Kafka and Jupyer-Spark Docker Stack](https://github.com/jbgithub22/kafka-jupyter-spark_docker-stack)
3. [Kafka Streams App (Java)](https://github.com/jbgithub22/opensea_kafka_streams_app)
4. Databricks Data Lakehouse

## Project Timeline
### Phase 1 - Project Setup
Setup of goals, basic project structure, timeline, virtual environments and version control.
### Phase 2 - Duct Tape / Rapid Prototyping Phase (Current Phase)
Get all componented connected and the entire pipeline running in whatever form as quick as possible.
### Phase 3 - Feature Complete Phase
All main features implemented. Design Freeze.
### Phase 4 - Stabilizing Phase
Start implementation of refactoring, OOP and modular programming. Build infrastructure for health-checks, cybersecurity, exception and logging if not already implemented.
### Phase 5 - Data Product Design Start
Assessment of 'Data Product' requirements, design and planning of data transformations required at each point of the pipeline to deliver the required 'Data Product' to the consumer.
### Phase 6 - Expansion of Data Product Offerings
Exploration of other data sources, and new data products from these new data sources. ie: X/TikTok sentiment data sources and delivering a sentiment analysis front-end.
### Phase 7 - Maintenance Phase
Patches and red-teaming on integrity of data pipeline. Cost-benefit analysis of version upgrades.


## References:
### Books:
- Joe Reis and Matt Housley (202), Fundamentals of Data Engineering. O’Reilly Media Inc.
### Links:
- OpenSEA stream API: https://docs.opensea.io/reference/stream-api-overview
- kafkajs: https://github.com/tulios/kafkajs
- ChatGPT: https://chatgpt.com/share/5e2508d4-cece-4ec4-a80a-df81a7251435
