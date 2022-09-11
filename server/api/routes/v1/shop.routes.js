module.exports = (app) => {
	const shops = require('../../controllers/shop.controller')
	var router = require('express').Router()

	router.post("/", shops.create)
	router.get("/", shops.findAll)
	router.get("/published", shops.findAllPublished)
	router.get("/:id", shops.findOne)
	router.put("/:id", shops.update)
	router.delete("/:id", shops.delete)
	router.delete("/", shops.deleteAll)

	app.use('/api/shops', router)
};