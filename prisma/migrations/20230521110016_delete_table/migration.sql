/*
  Warnings:

  - You are about to drop the column `status_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status_Order" AS ENUM ('BOOKED', 'CLEAN_UP', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_status_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status_id",
ADD COLUMN     "status" "Status_Order" NOT NULL DEFAULT 'BOOKED';

-- DropTable
DROP TABLE "Status";
