require('dotenv').config();

const openseaApiKey = process.env.OPENSEA_API_KEY;
const { Kafka } = require('kafkajs');
const { OpenSeaStreamClient, Network } = require('@opensea/stream-js');
const { WebSocket } = require('ws');
const { LocalStorage } = require('node-localstorage');

// Initialize Kafka client and producer
const kafka = new Kafka({
  clientId: 'opensea-producer',
  brokers: ['localhost:9097'],
});
const producer = kafka.producer();

// Define a function to send messages to Kafka
async function produceMessages(message) {
  await producer.connect();
  await producer.send({
    topic: 'opensea-stream',
    messages: [{ value: JSON.stringify(message) }],
  });
  console.log('Message sent to Kafka:', message);
}

// Initialize OpenSea Stream Client
const client = new OpenSeaStreamClient({
  token: openseaApiKey,           // Replace with your actual OpenSea API key
  network: Network.MAINNET,       // Or Network.TESTNET if you're testing
  onError: (err) => console.error('OpenSea Stream Error:', err),
  logLevel: 'info',               // Adjust log level as needed
  connectOptions: {
    transport: WebSocket,         // Use WebSocket transport
    sessionStorage: LocalStorage
  }
});

// Subscribe to the "Item Sold" event for a specific collection
client.onItemSold('collection-slug', async (event) => {
  console.log('Received Item Sold Event:', event);

  // Send the event to Kafka
  await produceMessages(event);
});

// Alternatively, subscribe to all collections using '*'
// client.onItemSold('*', async (event) => {
//   console.log('Received Item Sold Event:', event);
//   await produceMessages(event);
// });

// Start the connection manually (optional)
// client.connect();

// Handle process exit
process.on('SIGINT', async () => {
  console.log('Disconnecting from OpenSea Stream API and Kafka...');
  await producer.disconnect();
  client.disconnect();
  process.exit(0);
});