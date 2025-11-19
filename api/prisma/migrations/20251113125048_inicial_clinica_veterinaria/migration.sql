-- CreateTable
CREATE TABLE "secretarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT,
    "cargo" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "secretarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veterinarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "crmv" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "telefone" TEXT,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veterinarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animais" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "raca" TEXT,
    "sexo" TEXT,
    "idade" INTEGER,
    "dataNascimento" TIMESTAMP(3),
    "peso" DOUBLE PRECISION,
    "responsavelNome" TEXT NOT NULL,
    "responsavelEmail" TEXT,
    "responsavelTelefone" TEXT,
    "observacoes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" SERIAL NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,
    "motivo" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Agendada',
    "anotacoes" TEXT,
    "valor" DOUBLE PRECISION,
    "AnimalId" INTEGER NOT NULL,
    "VeterinarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secretarios_email_key" ON "secretarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "veterinarios_email_key" ON "veterinarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "veterinarios_crmv_key" ON "veterinarios"("crmv");

-- CreateIndex
CREATE UNIQUE INDEX "animais_responsavelEmail_key" ON "animais"("responsavelEmail");

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_AnimalId_fkey" FOREIGN KEY ("AnimalId") REFERENCES "animais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_VeterinarioId_fkey" FOREIGN KEY ("VeterinarioId") REFERENCES "veterinarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
