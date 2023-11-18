-- CreateTable
CREATE TABLE "Actuality" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Actuality_pkey" PRIMARY KEY ("id")
);
