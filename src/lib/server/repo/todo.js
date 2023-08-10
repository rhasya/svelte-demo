import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const todo = prisma.todo;

export default todo;
