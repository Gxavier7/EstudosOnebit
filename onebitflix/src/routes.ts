import express from "express"
import { categoriesController } from "./controllers/categoriesController"
import { coursesController } from "./controllers/coursesController"
import { episodesController } from "./controllers/episodesController"
import { authController } from "./controllers/authController"
import { ensureAuth, ensureQueryAuth } from "./middlewares/auth"
import { favoritesController } from "./controllers/favoritesController"
import { likeController } from "./controllers/likeController"
import { usersController } from "./controllers/usersController"

const router = express.Router()

router.post(`/auth/register`, authController.register)
router.post(`/auth/login`, authController.login)

router.get(`/categories`, ensureAuth, categoriesController.index) 
router.get(`/categories/:id`, ensureAuth, categoriesController.show) 

router.get(`/courses/featured`, ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get(`/courses/popular`, ensureAuth, coursesController.popular)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get(`/courses/:id`, ensureAuth, coursesController.show)

router.get(`/episodes/stream`, ensureQueryAuth, episodesController.stream)

router.get(`/episodes/:id/watchtime`, ensureAuth, episodesController.getWatchTime)
router.post(`/episodes/:id/watchtime`, ensureAuth, episodesController.setWatchTime)

router.post(`/favorites`, ensureAuth, favoritesController.save)
router.get(`/favorites`, ensureAuth, favoritesController.index)
router.delete(`/favorites/:id`, ensureAuth, favoritesController.delete)

router.post(`/likes`, ensureAuth, likeController.save)
router.delete(`/likes/:id`, ensureAuth, likeController.delete)

router.get(`/users/current`, ensureAuth, usersController.show)
router.put(`/users/current`, ensureAuth, usersController.update)
router.put(`/users/current/password`, ensureAuth, usersController.updatePassword)
router.get(`/users/current/watching`, ensureAuth, usersController.watching)

export { router }