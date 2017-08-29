export default (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username:{type: DataTypes.STRING, notNull: true, unique: true,},
    firstName: {type: DataTypes.STRING, notNull: true,},
    lastName: {type: DataTypes.STRING, notNull: true,},
    phoneNumber: {type: DataTypes.STRING,},
    createdAt: {type: DataTypes.DATE, notNull: true,},
    updatedAt: {type: DataTypes.DATE, notNull: true,},
  });

  Users.associate = (models) => {
    console.log(models);
    Users.hasMany(models.Sections, {
      foreignKey: 'sectionId',
    });
  };

    return Users;
};
