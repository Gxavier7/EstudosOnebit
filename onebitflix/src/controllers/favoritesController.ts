import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { favoriteService } from "../services/favoriteService";

export const favoritesController = {
  // POST /favorites
  save: async ( req: AuthenticatedRequest, res: Response ) => {
    const userId = req.user?.id
    const { courseId } = req.body

    try {
      const favoriteWithCourseid = await favoriteService.findByCourseId(courseId)
      
      console.log(favoriteWithCourseid);

      if (favoriteWithCourseid.length !== 0) {
        throw new Error(`This course is already a favorite`)
      }
      
      if (typeof userId === `number` || typeof userId === `string`) {

        const favorite = await favoriteService.create(userId, Number(courseId))
  
        return res.status(201).json(favorite)
      } else {
        throw new Error (`User Id must be of type number`)
      }
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /favorites
  index: async ( req: AuthenticatedRequest, res: Response ) => {
    const userId = req.user!.id

    try {
      const favorites = await favoriteService.findByUserId(userId)

      return res.json(favorites)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}