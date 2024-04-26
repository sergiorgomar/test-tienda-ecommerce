import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img_profile: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  tableName: "users"
}); 

export default User;