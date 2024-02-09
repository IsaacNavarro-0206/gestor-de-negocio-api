import express from "express";
import {
  createIncomeOrExpense,
  getAllIncomeOrExpenses,
  getIncomeOrExpense,
  updateIncomeOrExpenses,
  deleteIncomeOrExpenses,
} from "../controllers/incomeExpensesController.js";

const router = express.Router();

router.route("/").post(createIncomeOrExpense).get(getAllIncomeOrExpenses);

router
  .route("/:id")
  .get(getIncomeOrExpense)
  .put(updateIncomeOrExpenses)
  .delete(deleteIncomeOrExpenses);

export default router;
