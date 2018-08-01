module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    var Clients = sequelize.define("client", {
      // This model needs a title, a body, and a category
      fullname: {
        type: DataTypes.STRING, allowNull: false,
        validate : {
          len: [1]
        }
      },
      shortname: {
        type: DataTypes.STRING, allowNull: false,
        validate : {
          len: [1]
        }
      },
      mail: {
        type: DataTypes.STRING, allowNull: false,
        validate : {
          len: [1]
        }
      },
      phone: {
        type: DataTypes.INTEGER, allowNull: false,
        validate : {
          len: [1]
        }
      },
      dirf: {
        type: DataTypes.STRING
      },
      createdate: {
        type: DataTypes.DATEONLY, allowNull: false,
     },
      notes: {
        type: DataTypes.STRING,
      }
      
    });

    Clients.associate = function(models) {
      Clients.hasMany(models.Movements, {
        onDelete: "cascade"
      });
    };
    return Clients;
    
  };





  