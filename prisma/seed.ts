import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        // Fechar a conexão com o banco de dados
        await prisma.$disconnect();
    } catch(error) {
        console.error("Erro ao criar as barbearias:", error);
    }
}

seedDatabase();