import { CategoryProduct } from "../models/categoryProduct.js";

//crea una categoria
const createCategoryProduct = async (req, res, next) => {
  try {
    await CategoryProduct.create({
      //id: req.body.id,
      nombre: req.body.nombre,
      // fecha_registro: req.body.fecha_registro,
    });

    res.json({ mensaje: "The category product has been successfully create" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtiene todas los categorias
const getAllCategoryProducts = async (res, next) => {
  try {
    const categoryProduct = await CategoryProduct.findAll({});
    res.json(categoryProduct);
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtiene una categoria por Id
const getCategoryProduct = async (req, res, next) => {
  try {
    let categoryProductId = req.params.id;
    const categoryProduct = await CategoryProduct.findOne({
      where: categoryProductId,
    });
    res.json(categoryProduct);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Actualiza una categoria en especifico por su Id
const updateCategoryProduct = async (req, res, next) => {
  try {
    let categoryProductToUpdate = req.params.id;
    let newData = req.body;

    const categoryProductUpdate = await CategoryProduct.findOne({
      where: { id: categoryProductToUpdate },
    }).then((categoryProduct) => {
      categoryProduct.update(newData);
    });

    res.json({ mensaje: "The category product has been successfully updated" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//Elimina product por su Id
const deleteCategoryProduct = async (req, res, next) => {
  try {
    let categoryProductToDelete = req.params.id;
    await CategoryProduct.destroy({ where: { id: categoryProductToDelete } });

    res.json({ mensaje: "category product has been deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};

export {
  createCategoryProduct,
  getAllCategoryProducts,
  getCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
};
