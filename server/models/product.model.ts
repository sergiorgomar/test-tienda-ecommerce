import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection";
import { Product } from "../dtos/product.dtos";

const ProductModel = sequelize.define<Model<Product>>('Product', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    tableName: "catalog_products"
}); 


export default ProductModel;