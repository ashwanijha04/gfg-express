const service = require("../services/recipes");

const getAll = async (req, res, next) => {
  try {
    res.json({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

const getAllNames = async (req, res, next) => {
  try {
    res.json({ data: await service.getAllNames() });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const recipe = await service.getById(req.params.id);
    if (recipe) {
      res.json({ data: recipe });
    } else {
      res.status(404).send("Recipe not found");
    }
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const newRecipe = await service.create(req.body);
    res.status(201).json({ data: newRecipe });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updatedRecipe = await service.update(req.params.id, req.body);
    if (updatedRecipe) {
      res.json({ data: updatedRecipe });
    } else {
      res.status(404).send("Recipe not found");
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const success = await service.remove(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Recipe not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getAllNames,
  getById,
  create,
  update,
  remove,
};




