module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    var Movements = sequelize.define("Movements", {
      // movements database starts here 
       status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      dateofpayment: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      proxpay: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      concept: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          len: [1]
        }
      }
      
    });
    Movements.associate = function(models) {
        Movements.belongsTo(models.client, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Movements;
    
  };