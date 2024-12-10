import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();

// 9ux6ZOZHRKsLBlb7
