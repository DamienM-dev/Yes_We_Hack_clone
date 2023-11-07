-- CreateTable
CREATE TABLE "HomePrimary" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,

    CONSTRAINT "HomePrimary_pkey" PRIMARY KEY ("id")
);
