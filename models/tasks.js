export default (sequelize, DataTypes) => {
  const Tasks = sequelize.define('tasks', {
    title: { type: DataTypes.STRING, notNull: true },
    description: { type: DataTypes.STRING },
  });

  return Tasks;
};
