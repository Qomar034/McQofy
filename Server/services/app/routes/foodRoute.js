const router = require('express').Router()
const controller = require('../controllers/foodController')

router.get('/', controller.getFood)
router.post('/', controller.postFood)
router.get('/:id', controller.grabFood)
router.put('/:id', controller.putFood)
router.patch('/:id', controller.patchFood)
router.delete('/:id', controller.deleteFood)

module.exports = router