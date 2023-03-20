

module.exports = ( sequelize, DataTypes ) => {
	const OrderDetail = sequelize.define( "OrderDetail", {
		id:{
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		product_variant_id:{
			type: DataTypes.STRING,
			allowNull: false
		},
		order_id:{
			type: DataTypes.STRING,
			allowNull: false
		},
		quantity:{
			type: DataTypes.INTEGER,
			allowNull: false
		}

	}, {
		tableName: "orders_details",
		timestamps: true
	} );
    
	OrderDetail.associate = ( models )=>{
		OrderDetail.belongsTo( models.ProductVariant, {
			foreignKey: "product_variant_id",
			as: "productVariant"
		} );

		OrderDetail.belongsTo( models.Order, {
			foreignKey: "order_id",
			as: "order"
		} );
	};

	return OrderDetail;
};    