export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: { type: DataTypes.STRING, notNull: true, unique: true },
    firstName: { type: DataTypes.STRING, notNull: true },
    lastName: { type: DataTypes.STRING, notNull: true },
    phoneNumber: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, notNull: true, unique: true },
    password: { type: DataTypes.STRING },
  }, { tableName: 'user' });

  User.associate = (models) => {
    User.hasMany(models.Sections, {
      foreignKey: 'sectionId',
      sourceKey: 'id',
    });
  };

  return User;
};
