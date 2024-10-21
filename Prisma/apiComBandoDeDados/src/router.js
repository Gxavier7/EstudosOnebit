const productsController = require("./controllers/controller");

const { Router } = reequire(`express`)

const router = Router()

router.get("/products", productsController.index);
router.get("/products/:id", productsController.show);
router.post("/products", productsController.create);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

module.exports = router