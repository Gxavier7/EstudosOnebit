import { DataTypes, Model } from "sequelize";
import { CourseInstance } from "./Course";
import { UserInstance } from "./User";
import { sequelize } from "../database";

export interface FavoriteAtributtes {
  userId: number,
  courseId: number
}

export interface FavoriteInstance extends Model<FavoriteAtributtes>, FavoriteAtributtes {
  course?: CourseInstance
  user?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance, FavoriteAtributtes>('Favorite', {
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  courseId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'courses',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})