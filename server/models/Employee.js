module.exports = (sequelize,DataTypes)=>{

    const Employee = sequelize.define('Employee', {
    //   uuid: {
    //       type: type.INTEGER,
    //       autoIncrement:true,
    //       primaryKey:true
    //     },
        user_name: {
          type: DataTypes.STRING,
          allowNull :false
        },
        email: {
            type: DataTypes.STRING,
            allowNull :false,
            validate: {
                isEmail: true,
            }
          },
        is_valid:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        matricule:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        }
      })
      Employee.associate = models=>{
        Employee.belongsTo(models.Agent,{
            foreignKey:{
                allowNull:false
            }
        })
      }
      return Employee
} 