module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Product', {
        id: {
            type: DataTypes.STRING(100),
            primaryKey: true,
            allowNull: false
        },

        ref: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        cover: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        image: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        image01: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        image02: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        image03: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        group: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        price: {
            type: DataTypes.DOUBLE(100),
            allowNull: false
        },

        cents: {
            type: DataTypes.DOUBLE(100),
            allowNull: false
        },

        oldPrice: {
            type: DataTypes.DOUBLE(100),
            allowNull: false
        },

        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tablename: 'products'
    })
    return Products
}