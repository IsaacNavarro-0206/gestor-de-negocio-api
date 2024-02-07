import { Product } from "../models/product.js";

//crea un producto
const createProduct = async (req, res, next) => {
  try {
    await Product.create({
      //id: req.body.id,
      id_categoria: req.body.id_categoria,
      nombre: req.body.nombre,
      // fecha_registro: req.body.fecha_registro,
    });

    res.json({ mensaje: "The product has been successfully create" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtiene todos los productos
const getAllProducts = async (res, next) => {
  try {
    const products = await Product.findAll({});
    res.json(products);
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtiene producto por ID
const getProduct= async (req, res, next) => {
  try {
    let producId = req.params.id
    const product = await Product.findOne({ where : producId});
    res.json(product);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Actualiza un product en especifico por su ID
const updateProduct = async (req, res, next) => {
  try {
    let productToUpdate = req.params.id;
    let newData = req.body;

    const productUpdate = await Product.findOne({
      where: { id: productToUpdate },
    }).then((product) => {
      product.update(newData);
    });

    res.json({ mensaje: "The product has been successfully updated" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//Elimina product por su Id
const deleteProduct = async (req, res, next) => {
  try {
    let productToDelete = req.params.id;
    await Product.destroy({ where: { id: productToDelete } });

    res.json({ mensaje: "product has been deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};

export{
  createProduct,
  getAllProducts,
  updateProduct,
  getProduct,
  deleteProduct
};
