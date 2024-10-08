const router= require("express").Router()
const ActControllers=require('../controllers/Actualiter')
const loginController=require('../controllers/user')
router.post('/api/AddPoste',ActControllers.AddPost)
router.get('/api/GEtPost',ActControllers.GetPoste)
router.put('/api/Update/:id',ActControllers.UpdatePost)
router.delete('/api/DeletePost/:id',ActControllers.DeletePost)
router.get('/api/getuser',ActControllers.GetUser)
router.post('/api/login',loginController.LoginUser)
router.post('/api/subscribe',loginController.Subscribe)
router.get('/api/getemailsubscribe',loginController.GetallEmail)
module.exports ={ActRouter:router}