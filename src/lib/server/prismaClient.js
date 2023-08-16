import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

/** @type {{prisma: PrismaClient | null}} */
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();
if (dev) globalForPrisma.prisma = prisma;
