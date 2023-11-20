import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import { sequelize } from '../config/db.config';

class Pronunciation extends Model<
  InferAttributes<Pronunciation>,
  InferCreationAttributes<Pronunciation>
> {
  declare id: CreationOptional<number>;
  declare pronunciation: string;
  declare parentId: number;
}

Pronunciation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pronunciation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Pronunciations',
  },
);

export default Pronunciation;
