import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import { sequelize } from '../config/db.config';

class GrammarPoint extends Model<
  InferAttributes<GrammarPoint>,
  InferCreationAttributes<GrammarPoint>
> {
  declare id: CreationOptional<number>;
  declare grammarPoint: string;
  declare parentId: number;
}

GrammarPoint.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    grammarPoint: {
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
    tableName: 'GrammarPoints',
  },
);

export default GrammarPoint;
