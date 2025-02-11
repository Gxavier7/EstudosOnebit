import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";
import { error } from "console";

export const usersController = {
  // GET /users/current
  show: async ( req: AuthenticatedRequest, res: Response ) => {
    
    try {
      const currentUser = req.user!
      
      return res.json(currentUser)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // PUT /users/current
  update: async ( req: AuthenticatedRequest, res: Response ) => {
    const { id } = req.user!
    const { firstName, lastName, phone, birth, email } = req.body

    try {      
      const updatedUser = await userService.update( id, { 
        firstName, 
        lastName, 
        phone, 
        birth, 
        email 
      })

      return res.json(updatedUser)

    } catch ( err ) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // PUT /users/current/password
  updatePassword: async ( req: AuthenticatedRequest, res: Response ) => {
    const user = req.user!
    const { currentPassword, newPassword } = req.body

    user.checkPassword(currentPassword, async ( err, isSame ) => {
      try {
        if ( err ) return res.status(400).json({ message: `Validation Error`})
        if ( !isSame ) return res.status(400).json({ message: `Wrong password`})
  
        await userService.updatePassword(user.id, newPassword)
        return res.status(204).send()
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message })
        }
      }
    })
  },

  // GET /users/current/watching
  watching: async ( req: AuthenticatedRequest, res: Response ) => {
    const { id } = req.user!
    
    try {
      const watching = await userService.getKeepWatchingList(id)

      return res.json(watching)
    } catch ( err ) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

}