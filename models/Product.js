// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // validating that it is a decimal
      validate: {
        isDecimal: true,
      },
    },
    // define stock colum
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      // validating that it is numeric
      validate: {
        isNumeric: true,
      },
    },
    // define category_id column
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references Category model id
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
