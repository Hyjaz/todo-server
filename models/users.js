export default (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username:{type: DataTypes.STRING, notNull: true, unique: true,},
    firstName: {type: DataTypes.STRING, notNull: true,},
    lastName: {type: DataTypes.STRING, notNull: true,},
    phoneNumber: {type: DataTypes.STRING,},
  });

  Users.associate = (models) => {
    console.log(models);
    Users.hasMany(models.Sections, {
      foreignKey: 'sectionId',
      sourceKey: 'id',
    });
  };

    return Users;
};
