import express from "express";
import {
  createIncomeOrExpense,
  getIncomeOrExpenses,
  getEntryOrExit,
  updateIncomeOrExpenses,
  deleteIncomeOrExpenses,
} from "../controllers/incomeExpensesController.js";

const router = express.Router();

router.route("/").post(createIncomeOrExpense).get(getIncomeOrExpenses);

router
  .route("/:id")
  .get(getEntryOrExit)
  .put(updateIncomeOrExpenses)
  .delete(deleteIncomeOrExpenses);

export default router;
