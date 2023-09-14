-- CreateEnum
CREATE TYPE "BenefitsType" AS ENUM ('CHRISTMAS_BONUS', 'PANTRY_BONUSES', 'LIFE_INSURANCE', 'NONE');

-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "first_name" CHAR(50) NOT NULL,
    "last_name1" CHAR(30) NOT NULL,
    "last_name2" CHAR(30) NOT NULL,
    "daily_salary" INTEGER NOT NULL DEFAULT 0,
    "admision_date" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user_id" INTEGER,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_user_id" INTEGER,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "Position" (
    "position_id" SERIAL NOT NULL,
    "position_name" CHAR(40) NOT NULL,
    "daily_salary" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user_id" INTEGER,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_user_id" INTEGER,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("position_id")
);

-- CreateTable
CREATE TABLE "Benefits" (
    "benefits_id" SERIAL NOT NULL,
    "type" "BenefitsType" NOT NULL DEFAULT 'NONE',
    "quantity" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user_id" INTEGER,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_user_id" INTEGER,

    CONSTRAINT "Benefits_pkey" PRIMARY KEY ("benefits_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_employee_id_key" ON "Position"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "Benefits_employee_id_key" ON "Benefits"("employee_id");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefits" ADD CONSTRAINT "Benefits_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
