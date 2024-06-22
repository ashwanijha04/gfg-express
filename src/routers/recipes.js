const express = require("express");
const router = express.Router();

const { 
	getAll, 
	getAllNames, 
	getById, 
	create, 
	update, 
	remove 
} = require("../controllers/recipes");

router.get("/", getAll);
router.get("/names", getAllNames);  // New route for names
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

// Route Chaining
// router.route('/').get(getAllRecipes).post(create);


module.exports = router;
