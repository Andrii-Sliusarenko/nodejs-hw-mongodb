

import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
mongodb+srv://andriisliusarenko:<db_password>@cluster0.fzui0.mongodb.net/my-contacts?retryWrites=true&w=majority&appName=Cluster0