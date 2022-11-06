import '@fastify/jwt';

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: {
            name: string;
            avatarUrl: string;
            sub: string;
        };
    }
}
