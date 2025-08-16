import fastify from 'fastify';
import { registerUserListRoutes } from './routes/userList';
import { connectToDatabase } from './db/index';

const app = fastify({ logger: true });

const start = async () => {
  try {
    const db = await connectToDatabase();
    registerUserListRoutes(app, db);

    await app.listen({ port: 6776 });
    app.log.info(`Server listening on http://localhost:6776`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();