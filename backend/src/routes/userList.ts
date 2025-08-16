import { FastifyInstance } from 'fastify';
import UserListController from '../controllers/userListController';

export function registerUserListRoutes(fastify: FastifyInstance, db: any) {
  const userListController = new UserListController(db);

  fastify.get('/api/usercount', async (request, reply) => {
    await userListController.getUserCount(request, reply);
  });
}