const db = require("../models");
const Shop = db.shop;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const shop = new Shop({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    image: req.body.image,
    published: req.body.published ? req.body.published : false,
  });

  shop
		.save(shop)
		.then(data => {
			res.send(data)
		})
		.catch(error => {
			res.status(500).send({
				message: error.message || "Some error occurred while creating the shop."
			})
		})
};

exports.findAll = (req, res) => {
	const name = req.query.name
	var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : 
	Shop.find(condition)
	.then(data => {
		res.send(data)
	})
	.catch(error => {
		res.status(500).send({
			message: error.message || "Some error occurred while retrieving shops."
		})
	})
}

exports.findOne = (req, res) => {
	const id = req.params.id
	Shop.findById(id)
		.then(data => {
			if (!data)
				res.status(404).send({ message: "Not found shop with id " + id })
			else res.send(data)
		})
		.catch(error => {
			res.status(500).send({ message: "Error retrieving shops with id " + id })
		})
}

exports.update = (req, res) => {
	if(!req.body) {
		return res.status(400).send({
			message: "Data to update cannot be empty!"
		})
	}

	const id = req.params.id
	Shop.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot update shop with id ${id}. Shop was not found!`
				})
			} else res.send({ message: "Shop was updated successfully." })
		})
		.catch(error => {
			res.status(500).send({
				message: error.message || "Error while updating Shop with id " + id
			})
		})
}

exports.delete = (req, res) => {
	const id = req.params.id
	Shop.findByIdAndRemove(id)
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: "Shop not found with id " + id
				})
			} else res.send({ message: "Shop was deleted successfully." })
		})
		.catch(error => {
			res.status(500).send({ message: "Could not delete Shop with id " + id })
		})
}

exports.deleteAll = (req, res) => {
	Shop.deleteMany({})
		.then(data => {
			res.send({ message: `${data.deletedCount} Shops were deleted successfully!` })
		})
		.catch(error => {
			res.status(500).send({ message: error.message || "Some error occurred while removing all shops." })
		})
}

exports.findAllPublished = (req, res) => {
	Shop.find({ published: true })
		.then(data => {
			res.send(data)
		})
		.catch(error => {
			res.status(500).send({ message: error.message || "Some error occurred while retrieving shops" })
		})
}