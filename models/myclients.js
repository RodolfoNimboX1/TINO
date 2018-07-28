module.exports = function (sequelize, DataTypes) {
    // Add code here to create a Post model
    var Client = sequelize.define("client", {
      // This model needs a title, a body, and a category
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      shortname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      dirf: {
        type: DataTypes.STRING(1234),
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      createdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
       lastpay: {
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
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
          len: [1]
        }
      },
      
    });
  // Don't forget to 'return' the post after defining
    return Client;
    
  };



  