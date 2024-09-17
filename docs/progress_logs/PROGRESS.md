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
10. Lakehouse: Allocated space in local disk for a locally hosted lakehouse for local ETL prototyping. (done)
11. Lakehouse: Design of bronze container ingestion folder structure. (started/in-progrees)
12. Lakehouse: Design of bronze container compaction/vacuum workflow. (started/in-progrees)
13. Lakehouse: First delta compaction spark job. (done)
14. Azure: Create Service Principal in Microsoft Entra. (done)
15. Azure: Create Key Vault Secret for Sevice Principal. (done)
16. Azure: Create Azure Data Lake Access Control Assignment for Service Principal. (done)
17. Azure: Create Key Vault Access Control Assignment for Azure Databricks. (done)
18. Databricks: Create Secret Scope for Key Vault Access. (done)
19. Databricks: Connect to Azure ADLS from Azure Databricks Notebook. (done/successful)
20. Databricks: Create clone of delta table in ADLS Silver container in Databricks SQL Warehouse. (done)
21. Databricks: Download Partner Connect connection file for Databricks-Tableau conneciton. (done)
22. Tableau: Navigate and view Databricks SQL Warehouse Table clone of Silver table. (done)
23. >Phase 2 - Minimum Viable Platform complete: OpenSea Node.js Producer > Local Docker (Kafka > Spark) > Azure ADLS Lakehouse > Databricks > Tableau.
### Phase 3:

To-do:
1. Test 2: 7-day data stream with batch ingestion to lakehouse.
3. Lakehouse-Tableau connection
4. Lakehouse-Plotly Dash connection
5. Kafka-Plotly Dash live connection