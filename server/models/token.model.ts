import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

import User from "./user.model";

const Token = sequelize.define('Token', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {
  tableName: "access_tokens"
}); 


Token.belongsTo(User, { foreignKey: 'user_id' } );

export default Token;