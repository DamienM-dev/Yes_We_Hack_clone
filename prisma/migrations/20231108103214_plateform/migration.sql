-- CreateTable
CREATE TABLE "Plateforme" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "list" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,

    CONSTRAINT "Plateforme_pkey" PRIMARY KEY ("id")
);
