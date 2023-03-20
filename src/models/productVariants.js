

module.exports = ( sequelize, DataTypes ) => {
	const ProductVariant = sequelize.define(
		"ProductVariant",
		{
			id:{
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false
			},
			model:{
				type: DataTypes.STRING,
				allowNull: false
			},
			color:{
				type: DataTypes.STRING,
				allowNull: false
			},
			quantity:{
				type: DataTypes.INTEGER,
				allowNull: false
			},
			image:{
				type: DataTypes.STRING,
				allowNull: false
			},
			size:{
				type: DataTypes.STRING,
				allowNull: false
			},
			product_id:{
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			tableName: "products_variant",
			timestamps: true
		}
	);

	ProductVariant.associate = ( models )=>{
		ProductVariant.belongsTo( models.Product, {
			foreignKey: "product_id",
			as: "product"
		} );

		ProductVariant.belongsToMany(
			models.Order,
			{ through: models.OrderDetail }
		);
	};

	return ProductVariant;
};
