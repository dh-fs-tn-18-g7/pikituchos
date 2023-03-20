

module.exports = ( sequelize, DataTypes ) => {
	const User = sequelize.define( "User", {
		id:{
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		name:{
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf:{
			type: DataTypes.STRING,
			allowNull: false
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false
		},
		password:{
			type: DataTypes.STRING,
			allowNull: false
		},
		tel:{
			type: DataTypes.STRING,
			allowNull: false
		},
		is_admin:{
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		address_id:{
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: "users",
		timestamps: true
	} );

    
	User.associate = ( models ) => {
		User.belongsTo( models.Address, {
			foreignKey: "address_id",
			as: "address"
		} );

	};



	return User;
};