-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "who" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
