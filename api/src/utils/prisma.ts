// src/utils/prisma.ts

import { PrismaClient } from '../generated/prisma'; 

// Instancia o Prisma Client
const prisma = new PrismaClient();

// Exporta para ser usado em todos os Controllers
export { prisma };