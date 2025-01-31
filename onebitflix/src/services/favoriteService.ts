import { Favorite } from "../models"

export const favoriteService = {
  create: async (userId: number, courseId: number) => {
    const favorite = Favorite.create({
      courseId,
      userId
    })

    return favorite
  },
   
  findByUserId: async (userId: number) => {
    const favorites = Favorite.findAll({
      attributes: [['user_id', 'userId']],
      where: { userId },
      include: {
        association: `Course`,
        attributes: [
          'id',
          'name',
          'synopsis',
          ['thumbnail_url', 'thumbnailUrl']
        ]
      }
    })

    return {
      userId,
      //@ts-ignore
      courses: (await favorites).map(favorite => favorite.Course)
    }
  },

  isFavorited: async ( userId: number, courseId: number ) => {
    const favorited = await Favorite.findOne({
      where: {
        userId,
        courseId
      }
    })

    return favorited !== null
  },

  delete: async ( userId: number, courseId: number ) => {
    await Favorite.destroy({
      where: {
        userId,
        courseId
      }
    })
  }
}