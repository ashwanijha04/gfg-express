const fs = require("fs").promises;
const path = require("path");

const recipesFilePath = path.join(__dirname, "../db/recipes.json"); // Contruct the path to the recipes data


/**
HTTP Method PATH        
            
GET /api/v1/recipe  Read information about all the recipes  
GET /api/v1/recipe/1    Read information about the recipe with ID of `1`    
POST    /api/v1/createRecipe    Create a new recipe 
PUT /api/v1/recipes/1   Update the existing recipe with ID of `1` with all new content  
DELETE  /api/v1/recipes/1   Delete the recipes with id  

**/



const getAll = async () => JSON.parse(await fs.readFile(recipesFilePath))

const getAllNames = async () => {
  const recipes = await getAll();
  return recipes.map(recipe => recipe.name);
};

const getById = async (id) => {
  const recipes = await getAll();
  return recipes.find(recipe => recipe.id === parseInt(id));
};

const create = async (newRecipe) => {
  const recipes = await getAll();
  newRecipe.id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
  recipes.push(newRecipe);
  await fs.writeFile(recipesFilePath, JSON.stringify(recipes, null, 2));
  return newRecipe;
};

const update = async (id, updatedRecipe) => {
  const recipes = await getAll();
  const index = recipes.findIndex(recipe => recipe.id === parseInt(id));
  if (index !== -1) {
    recipes[index] = { ...updatedRecipe, id: parseInt(id) };
    await fs.writeFile(recipesFilePath, JSON.stringify(recipes, null, 2));
    return recipes[index];
  }
  return null;
};

const remove = async (id) => {
  const recipes = await getAll();
  const filteredRecipes = recipes.filter(recipe => recipe.id !== parseInt(id));
  await fs.writeFile(recipesFilePath, JSON.stringify(filteredRecipes, null, 2));
  return recipes.length !== filteredRecipes.length;
};


module.exports = {
  getAll,
  getAllNames,
  getById,
  create,
  update,
  remove,
};







