export default (sequelize, DataTypes) => {
  const Tasks = sequelize.define('tasks', {
    title: {type: DataTypes.STRING, notNull: true,},
    description: {type: DataTypes.STRING,},
    createdAt: {type: DataTypes.DATE, notNull: true,},
    updatedAt: {type: DataTypes.DATE, notNull: true,},
  });

  return Tasks;
};
