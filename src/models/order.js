

module.exports = ( sequelize, DataTypes ) => {
	const Order = sequelize.define( "Order", {
		id:{
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		user_id:{
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: "orders",
		timestamps: true
	} );

	Order.associate = ( models )=>{
		Order.belongsTo( models.User, {
			foreignKey: "user_id",
			as: "user"
		} );

		Order.belongsToMany( models.ProductVariant, {
			through: models.OrderDetail
		} );
	};

	return Order;
};