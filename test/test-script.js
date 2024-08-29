const { Kafka } = require('kafkajs');
const { OpenSeaStreamClient, Network } = require('@opensea/stream-js');
const { WebSocket } = require('ws');
const { LocalStorage } = require('node-localstorage');
require('dotenv').config();

// Initialize Kafka client and producer
const openseaApiKey = process.env.OPENSEA_API_KEY;
const kafka = new Kafka({
    clientId: 'test-producer',
    brokers: ['localhost:9097'],
  });
const producer = kafka.producer();
const admin = kafka.admin();

// Function to create Kafka topic
async function createTopic() {
    await admin.connect();
    try {
        await admin.createTopics({
            topics: [{ topic: 'test-topic', numPartitions: 1 }],
        });
        console.log('Topic created');
    } catch (error) {
        if (error.type === 'TOPIC_ALREADY_EXISTS') {
            console.log('Topic already exists');
        } else {
            throw error;
        }
    } finally {
        await admin.disconnect();
    }
}

// Test Kafka Producer
async function testKafkaProducer() {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Test message' }],
  });
  console.log('Test message sent to Kafka');
  await producer.disconnect();
}

// Test OpenSea Stream Client
async function testOpenSeaClient() {
  const client = new OpenSeaStreamClient({
    token: openseaApiKey,
    network: Network.MAINNET,
    onError: (err) => console.error('OpenSea Stream Error:', err),
    logLevel: 'info',
    connectOptions: {
        transport: WebSocket,
        sessionStorage: LocalStorage
    }
  });

  client.onItemSold('*', async (event) => {
    console.log('Received Item Sold Event:', event);
  });

  // Simulate connection (if needed)
  client.connect();
}

// Run tests
(async () => {
    await createTopic();
    await testKafkaProducer();
    await testOpenSeaClient();
})();