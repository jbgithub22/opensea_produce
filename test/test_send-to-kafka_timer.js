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
            topics: [{ topic: 'test-os_event_24hr', numPartitions: 4 }],
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

// Test OpenSea Producer
async function testOpenSeaProducer() {
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
  
    // 24 hours in milliseconds (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const duration = 24 * 60 * 60 * 1000;
    let eventCount = 0;
  
    const eventPromise = new Promise((resolve) => {
        producer.connect();
        client.onItemSold('*', async (event) => {
            eventCount ++
            console.log(event, 'Received Item Sold Event: #', eventCount);

            // Send event to Kafka
            try {
            await producer.send({
                topic: 'test-os_event_24hr',
                messages: [{ value: JSON.stringify(event) }],
            });
            } catch (error) {
            console.error('Error sending event to Kafka:', error);
            }
        });
  
      // Set a timeout to run the function for 24 hours
        setTimeout(() => {
            console.log('24 hours passed. Disconnecting from OpenSea Stream API and Kafka...');
            client.disconnect();
            producer.disconnect();
            resolve();
        }, duration);
    });

  // Simulate connection (if needed)
  client.connect();

  // Wait until 10 events are received
  await eventPromise;

  // Disconnect the client
  client.disconnect();
  await producer.disconnect();
}

// Run tests
(async () => {
    await createTopic();
    await testOpenSeaProducer();
})();