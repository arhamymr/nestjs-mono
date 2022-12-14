-- CreateTable
CREATE TABLE "article" (
    "title" TEXT NOT NULL,
    "author_id" TEXT,
    "last_update" TEXT,
    "link" TEXT,
    "category" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "article_title_key" ON "article"("title");
