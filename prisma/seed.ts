import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Lucas Maciel',
            email: 'luk4xm4ci3l@gmail.com',
            avatarUrl: 'https://github.com/Luk4x.png'
        }
    });

    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool',
            code: 'luk4xl',
            ownerId: user.id,
            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    });

    await prisma.game.create({
        data: {
            date: '2022-11-05T12:00:00.647Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR'
        }
    });

    await prisma.game.create({
        data: {
            date: '2022-11-06T12:00:00.647Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',
            guesses: {
                create: {
                    firstTeamPoints: 1,
                    secondTeamPoints: 2,
                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    });
})();
