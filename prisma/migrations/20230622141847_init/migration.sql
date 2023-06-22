/*
  Warnings:

  - The values [BOOKED,CLEAN_UP] on the enum `Status_Order` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `address` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Order` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Order_Type" AS ENUM ('FULL', 'TECHNICAL');

-- AlterEnum
BEGIN;
CREATE TYPE "Status_Order_new" AS ENUM ('CLEANING', 'COMPLETED');
ALTER TABLE "Order" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "OldOrder" ALTER COLUMN "status" TYPE "Status_Order_new" USING ("status"::text::"Status_Order_new");
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "Status_Order_new" USING ("status"::text::"Status_Order_new");
ALTER TABLE "CutomerCleaningOrder" ALTER COLUMN "status" TYPE "Status_Order_new" USING ("status"::text::"Status_Order_new");
ALTER TYPE "Status_Order" RENAME TO "Status_Order_old";
ALTER TYPE "Status_Order_new" RENAME TO "Status_Order";
DROP TYPE "Status_Order_old";
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'CLEANING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_customer_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "address",
DROP COLUMN "customer_id",
DROP COLUMN "description",
ADD COLUMN     "order_type" "Order_Type" NOT NULL DEFAULT 'FULL',
ADD COLUMN     "room_number" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "x" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "y" TEXT NOT NULL DEFAULT '0',
ALTER COLUMN "status" SET DEFAULT 'CLEANING';

-- CreateTable
CREATE TABLE "OldOrder" (
    "id" UUID NOT NULL,
    "status" "Status_Order" NOT NULL DEFAULT 'CLEANING',
    "customer_id" UUID NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "OldOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CutomerCleaningOrder" (
    "id" UUID NOT NULL,
    "status" "Status_Order" NOT NULL DEFAULT 'CLEANING',
    "room_id" UUID NOT NULL,
    "hotel_id" TEXT NOT NULL,
    "cleaning_type" TEXT NOT NULL,

    CONSTRAINT "CutomerCleaningOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OldOrder" ADD CONSTRAINT "OldOrder_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
