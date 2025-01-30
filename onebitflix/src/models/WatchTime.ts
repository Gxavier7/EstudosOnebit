import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface WatchTimeAtributtes {
  seconds: number,
  userId: number,
  episodeId: number
}

export interface WatchTimeInstance extends Model<WatchTimeAtributtes>, WatchTimeAtributtes {}

export const WatchTime = sequelize.define<WatchTimeInstance, WatchTimeAtributtes>( `WatchTime`, {
  seconds: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  episodeId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: { model: 'episodes', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})