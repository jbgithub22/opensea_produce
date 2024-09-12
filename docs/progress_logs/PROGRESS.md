# Progress Logs

### Phase 1 - Project Setup
Setup of goals, basic project structure, timeline, virtual environments and version control.
1. Kafka, Spark, Jupyter Docker images setup, docker-compose setup and 1st git commit.
2. Node.js project directory setup and 1st git commit.
3. Java Gradle project directory setup and 1st git commit.
4. Azure account, git documentation creation and 1st git commit.
### Phase 2 - Duct Tape / Rapid Prototyping Phase (Current Phase)
Get all componented connected and the entire pipeline running in whatever form as quick as possible.
1. Kafka-Spark-Jupyter Docker stack: run containers. (done)
2. Kafka: Create test topics. (done)
3. Spark: Create and run spark session. (done)
4. Node.js app: Connect to OpenSEA API and produce json transaction console logs. (done)
5. Node.js app: Produce live json transaction data to kafka topics. (done)
6. Spark: Achieve consumption of kafka topic and basic transformation to another kafka topic. (done)
7. Azure Lakehouse: Achieve creation of Bronze, Silver and Gold containers. (done)
8. Azure Lakehouse: Achieve writing of simple delta file df data to lakehouse from local Spark Docker container. (done)
9. Test 1: Soure-to-Lakehouse pipeline 24 hour running, 5 min batch ingestion to lakehouse. (started/in-progrees)
10. Lakehouse: Allocated space in local disk for a locally hosted lakehouse for local ETL prototyping. (started/in-progrees)
11. Lakehouse: Design of bronze container ingestion folder structure. (started/in-progrees)
12. Lakehouse: Design of bronze container compaction/vacuum workflow. (started/in-progrees)

To-do:
1. Test 2: 7-day data stream with batch ingestion to lakehouse.
3. Lakehouse-Tableau connection
4. Lakehouse-Plotly Dash connection
5. Kafka-Plotly Dash live connection