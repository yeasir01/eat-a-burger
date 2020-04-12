module.exports = (sequelize, DataTypes) => {
    var burger = sequelize.define("burgers_tbl", {
        burger: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {freezeTableName: true}
    
    );

    return burger;
};