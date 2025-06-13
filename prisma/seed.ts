import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@prisma.io' },
    update: {},
    create: {
      email: 'admin@prisma.io',
      name: 'Admin',
      password: '12345',
      last_time_at: new Date(),
      is_admin: true,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
