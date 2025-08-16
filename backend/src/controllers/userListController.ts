import { FastifyReply, FastifyRequest } from 'fastify';
import { DatabaseConnection } from '../types/index';

class UserListController {
    constructor(private db: DatabaseConnection) {}

    async getUserCount(request: FastifyRequest, reply: FastifyReply) {
        try {
            const [rows] = await this.db.query('SELECT COUNT(*) AS count FROM user_list');
            const count = rows[0].count;
            reply.send({ totalUsers: count });
        } catch (error) {
            console.error('Database error:', error);
            reply.status(500).send({ error: 'Internal Server Error: Unable to fetch user count.' });
        }
    }
}

export default UserListController;