

module.exports = ( sequelize, DataTypes ) => {
	const Category = sequelize.define( "Category", {
		id:{
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		category_name:{
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName:"categories",
		timestamps: true
	} );

	Category.associate = ( models )=>{
		Category.hasMany( models.Product );
	};

	return Category;
};