const { Food, Category } = require('../models')

class FoodController {
    static async postFood(req, res, next){
        try {
            let { name, description, imgUrl, price, CategoryId, UserId } = req.body
            // let UserId = req.user.id
            if (!UserId) UserId = 1

            let newFood = await Food.create({ name, description, imgUrl, price, CategoryId, UserId })
            res.status(201).json({msg: `${name} added to Food with Id ${newFood.id}`})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "error in post food"})
        }
    }

    static async getFood(req, res, next){
        try {
            let options = { include: ["Category", 
                { association: "User", attributes: ['username'] }] }

            let { category } = req.query
            if (category) options.where = { CategoryId: category }

            let calledFoods = await Food.findAll(options)
            res.status(200).json(calledFoods)
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "error in get food"})
        }
    }

    static async grabFood(req, res, next){
        try {
            let { id } = req.params
            let grabbedFood = await Food.findByPk(id, {
                include: ["Category",
                    { association: "User", attributes: ['username'] }] })

            res.status(200).json(grabbedFood)
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "error in get food"})
        }
    }

    static async putFood(req, res, next){
        try {
            let { id } = req.params
            let updatedFood = await Food.findByPk(id)

            let { name, description, imgUrl, price, CategoryId, UserId } = req.body
            // let UserId = req.user.id
            if (!UserId) UserId = 1

            await updatedFood.update({ name, description, imgUrl, price, CategoryId, UserId })
            res.status(200).json({msg: `data of food with id ${updatedFood.id} succesfully updated`})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "error in put food"})
        }
    }

    static async patchFood(req, res, next){
        try {
            let { id } = req.params
            let patchedFood = await Food.findByPk(id)
            const oldStatus = patchedFood.status

            let { status } = req.body
            await patchedFood.update({ status })
            res.status(200).json({msg: `${patchedFood.name} status changed from ${oldStatus} to ${status}.`})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "error in patch food"})
        }
    }

    static async deleteFood(req, res, next){
        try {
            let { id } = req.params
            let destroyedFood = await Food.destroy({where : { id }})

            res.status(200).json({msg: `${destroyedFood.name} successfully removed`})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "error in delete food"})
        }
    }
}

module.exports = FoodController