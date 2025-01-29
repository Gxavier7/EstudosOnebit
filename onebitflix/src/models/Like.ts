import { DataTypes, Model } from "sequelize";
import { CourseInstance } from "./Course";
import { UserInstance } from "./User";
import { sequelize } from "../database";

export interface LikeAtributtes {
  userId: number,
  courseId: number
}

export interface LikeInstance extends Model<LikeAtributtes>, LikeAtributtes {
  course?: CourseInstance
  user?: UserInstance
}

export const Like = sequelize.define<LikeInstance, LikeAtributtes>('Like', {
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