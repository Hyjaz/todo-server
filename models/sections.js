export default (sequelize, DataTypes) => {
  const Sections = sequelize.define('sections', {
    states: {type: DataTypes.STRING, notNull: true,},
    createdAt: {type: DataTypes.DATE, notNull: true,},
    updatedAt: {type: DataTypes.DATE, notNull: true,},
  });

  Sections.associate = (models) => {
    console.log(models);
    Sections.hasMany(models.Tasks, {
      foreignKey: 'taskId',
      sourceKey: 'id',
    });
  };
  return Sections;
}
