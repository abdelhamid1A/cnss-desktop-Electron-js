module.exports = (sequelize,DataTypes)=>{

    const Agent = sequelize.define('Agent', {
    //   uuid: {
    //       type: type.INTEGER,
    //       autoIncrement:true,
    //       primaryKey:true
    //     },
        user_name: {
          type: DataTypes.STRING,
          allowNull :false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
      })
      Agent.associate = models=>{
        Agent.hasMany(models.Employee)
      }
      return Agent
} 