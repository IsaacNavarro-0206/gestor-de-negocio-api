import { IncomeExpenses } from "../models/incomeExpenses.js";

const createIncomeOrExpense = async (req, res, next) => {
  try {
    await IncomeExpenses.create({
      id_producto: req.body.id_producto,
      tipo: req.body.tipo,
      descripcion: req.body.descripcion,
      valor: req.body.valor,
      // fecha_registro: req.body.fecha_registro,
    });

    res.json({ mensaje: "The income or expense has been successfully create" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//Obtiene todos los Contactos
const getAllIncomeOrExpenses = async (req, res, next) => {
  try {
    const incomeOrExpense = await IncomeExpenses.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.json(incomeOrExpense);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Obtiene un IncomeExpenses en especifico por su ID
const getIncomeOrExpense = async (req, res, next) => {
  try {
    let entryOrExitId = req.params.id;

    const entryOrExitI = await IncomeExpenses.findOne({
      where: { id: entryOrExitId },
    });

    res.json(entryOrExitI);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Actualiza un IncomeExpenses en especifico por su ID
const updateIncomeOrExpenses = async (req, res, next) => {
  try {
    let entryOrExitId = req.params.id;
    let newData = req.body;

    const incomeExpenseUpdate = await IncomeExpenses.findOne({
      where: { id: entryOrExitId },
    }).then((entryOrExit) => {
      entryOrExit.update(newData);
    });

    res.json({
      mensaje: "The income or expense has been successfully updated",
    });
    // res.json(incomeExpenseUpdate);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Elimina IncomeExpenses por su ID
const deleteIncomeOrExpenses = async (req, res, next) => {
  try {
    let entryOrExitId = req.params.id;
    await IncomeExpenses.destroy({ where: { id: entryOrExitId } });

    res.json({ mensaje: "El IncomeExpenses fue eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};

export {
  createIncomeOrExpense,
  getAllIncomeOrExpenses,
  getIncomeOrExpense,
  updateIncomeOrExpenses,
  deleteIncomeOrExpenses,
};
